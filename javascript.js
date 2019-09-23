
var rating = 3;
//recipe page JS
var list = {}
var items = JSON.parse(localStorage.getItem("items")) || [];

$(".btn").on("click", function() {
    event.preventDefault();

    var recipe = $("#input").val().trim();
    var number = $("#FormInput2").val();

    var queryURL = "https://api.edamam.com/search?q=" + recipe + "&app_id=b7748014&app_key=2bee19be6b5a1adece7bce58beae50ab&count=20"
    console.log(queryURL)

    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response){
            console.log(response.hits);
            var results = response.hits;
            for (var i = 0; i < number; i++){
                var newDiv = $("<div>").attr("id", "recipeDiv" + i);
                var hit = Math.floor(Math.random()*results.length)
                console.log(results[hit])
                results.splice(hit, 1);
                console.log(results)
                var label = results[i].recipe.label;
                var img = $("<div>").html("<img data-label='"+label+"' class='recipeImg' src='" + results[i].recipe.image + " '/>");
                var info = $("<div>").text("Time: " + results[i].recipe.totalTime + " min.  ||  " + "Servings: " + results[i].recipe.yield)
                var url = $("<div>").html("<a href='" + results[i].recipe.url + "'>" + results[i].recipe.url + "</a>");
                $(ingredients).append(line)


                var arr = results[i].recipe.ingredientLines
                arr.map((item, index) => {
                  return list[index] = item
                })
                console.log(list)
                var ingredients = $("<ul>")
                for (var j = 0; j < arr.length; j++){
                    console.log(arr[j])
                    var line = $("<li>").text(arr[j])
                    ingredients.append(line)
                var button = $("<button>").addClass("ingredient-shopping-list").text("Add to Shopping").attr("data-ingredients", arr)
                }
            newDiv.prepend(label, img, info, button, ingredients, url);
            $(".list-of-recipes").append(newDiv);
            }
        })
})
<<<<<<< HEAD

function searchBar () {
    $(".search-bar").append(`<input id="videoSearch" type="text"><button id="video-input" class="btn" type="submit">Search</button>`);
}


function searchVideo(){
    var searchTerm = $("#videoSearch").val().trim();
    $(".get-video").empty();
    console.log($("#videoSearch").val().trim())
    var queryURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&key=AIzaSyDtueaZi7FV1QERCc2pUAeb_9S4hImUb4Y&maxResults=5&videoCategoryId=food`

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        for (var i = 0; i < response.items.length; i++){

            console.log(response.items[i])
            var videoId = response.items[i].id.videoId;
            
            $(".get-video").append(`<iframe id="player" type="text/html" width="250" height="250" src="https://www.youtube.com/embed/${videoId}?enablejsapi=1" frameborder="0"></iframe>`)
        }
        })
}
=======
//write a function that will take in an array and loop through randomly to select the number of recipes desired. Then each loop through splice(take out) the index that was selected so that the same recipe doesn't show more than once.
//shopping list page JS
function renderItems(){
  $("#shopping-list-items").empty()

  items.forEach(function (item, i){
    var shoppingItem = $("<p>");
    shoppingItem.text(item);

    var itemClose = $("<button>")
    itemClose.attr("data-item", i);
    itemClose.addClass("checkbox");
    itemClose.text("x");
   
    shoppingItem = shoppingItem.prepend(itemClose);

    $("#shopping-list-items").append(shoppingItem);
  });
};
$("#add-item").on("click", function (event) {
  event.preventDefault();

  var itemName = $("#item").val().trim();

  items.push(itemName);

  localStorage.setItem("items", JSON.stringify(items));

  renderItems();
  getLocalStorage();

  $("item").val("");
});
$("#shopping-list-items").on("click", ".checkbox", function(){
    var index = $(this).attr("data-item");

    items.splice(index, 1);

    localStorage.setItem("items", JSON.stringify(items));

    renderItems();
});
function renderIngredients(){ 
  $("#shopping-list-items").empty()

  shoppingIngredients.forEach(function (item, i){
    var shoppingItem = $("<p>");
    shoppingItem.text(item);

    var itemClose = $("<button>")
    itemClose.attr("data-item", i);
    itemClose.addClass("checkbox");
    itemClose.text("x");
   
    shoppingItem = shoppingItem.prepend(itemClose);

    $("#shopping-list-items").append(shoppingItem);
  })
};
$(".list-of-recipes").on("click", ".ingredient-shopping-list", function(){
  localStorage.setItem("recipeItems", JSON.stringify(list));
  getLocalStorage()
})
function createItem(str){
  var shoppingItem = $("<p>");
    shoppingItem.text(str);

    var itemClose = $("<button>")
    itemClose.attr("data-item", i);
    itemClose.addClass("checkbox");
    itemClose.text("x");
>>>>>>> f81213df41c3d5f0bc76c3f62f631703959fc21a

    shoppingItem = shoppingItem.prepend(itemClose);

    $("#shopping-list-items").append(shoppingItem);
}
function renderToScreen(str){
  var shoppingListObject = JSON.parse(str)
  var ingredientsArr = Object.values(shoppingListObject)
  ingredientsArr.forEach((ingredient, i) => {
    var shoppingItem = $("<p>");
    shoppingItem.text(ingredient);

    var itemClose = $("<button>")
    itemClose.attr("data-item", i);
    itemClose.addClass("checkbox");
    itemClose.text("x");

    shoppingItem = shoppingItem.prepend(itemClose);

    $("#shopping-list-items").append(shoppingItem);
  })
}
function getLocalStorage(){
  var localStorageString = localStorage.getItem("recipeItems")
  renderToScreen(localStorageString);
}
renderItems()
getLocalStorage()
//Youtube api
function displayVideo(){
  var searchTerm = $(this).data("label")
    console.log(searchTerm)
    searchBar();
    //google api key: AIzaSyDtueaZi7FV1QERCc2pUAeb_9S4hImUb4Y 
    var queryURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&key=AIzaSyDtueaZi7FV1QERCc2pUAeb_9S4hImUb4Y&maxResults=5&videoCategoryId=food`

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        for (var i = 0; i < response.items.length; i++){

            console.log(response.items[i])
            var videoId = response.items[i].id.videoId;
            
            $(".get-video").append(`<iframe id="player" type="text/html" width="250" height="250" src="https://www.youtube.com/embed/${videoId}?enablejsapi=1" frameborder="0"></iframe>`)
        }
        })
    }

$(".list-of-recipes").on("click", ".recipeImg", displayVideo)
<<<<<<< HEAD
$(".video").on("click", "#video-input", searchVideo)

=======
// Star Functionality
  $(document).ready(function (){
  
  });


  var firebaseConfig = {

    apiKey: "AIzaSyAKq_LRm-IOOQRiqnyRP4DF_-1pOxp0gas",
    authDomain: "sunday-staples.firebaseapp.com",
    databaseURL: "https://sunday-staples.firebaseio.com",
    projectId: "sunday-staples",
    storageBucket: "",
    messagingSenderId: "473432398955",
    appId: "1:473432398955:web:1e9ba1855bf66cfeeb252e"

  };

  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  $("#submit-review").on("click", function(event) {
      event.preventDefault()

      var yourName = $("#your-name").val().trim();
      var recipeName = $("#recipe-name").val().trim();
      var comment = $("#review-comment").val().trim();

      database.ref().push({

        name: yourName,
        recipe: recipeName,
        review: comment,
        rate: rating,

      })

      $("input, textarea").val("");
      rating = 3;

  });

  $(".rating-stars .star").on("click", function() {
    $(".rating-stars .star").removeClass("selected");
    $(this).addClass("selected");
    rating = $(this).attr("data-value")

  })

  database.ref().on("child_added", function(childSnapshot) {

    var userName = (childSnapshot.val().name);
    var recipeTitle = (childSnapshot.val().recipe);
    var userReview = (childSnapshot.val().review);
    var userRating = (childSnapshot.val().rate);

    $("#reviews").append("<h5>" + userName + "</h5><h4>" + recipeTitle + "</h4>,<p>" + userReview + "</p><i class='star star-" + userRating + "'/>")

  }, function(errorObj) {

    console.log("Errors handled: " + errorObj.code);

  });
>>>>>>> f81213df41c3d5f0bc76c3f62f631703959fc21a
