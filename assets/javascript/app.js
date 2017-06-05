//==========how to clear out input
//=========VERIFY URL IS CORRECT


$(document).ready(function() {

//Starting animals
var animals = ["Dog", "Cat", "Bird"];


//displayAnimalGiphy function ro render the giphy
function displayAnimalGiphy() {

  var animal = $(this).attr("data-name");
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
    animal + "&api_key=dc6zaTOxFJmzC&limit=10";

    //Create AJAX for movie button clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      console.log(response);
      $("#animals").empty();
      response.data.forEach(function(image) {
        $("#animals").append('<p>Rating: "' + image.rating + '"<p>');

        var gifImage = $("<img>");
        gifImage.attr("src", image.images.fixed_height_still.url);
        gifImage.attr("data-still", image.images.fixed_height_still.url);
        gifImage.attr("data-animate", image.images.fixed_height.url);
        gifImage.attr("data-state", "still");
        gifImage.addClass("gifs");
        $("#animals").append(gifImage);
      })
    })
  };

  $(document).on("click", ".gifs", toggle);

  function toggle() {
    //set to data-state
    var state = $(this).attr("data-state");
    //if the images state is still, update src to data-animate
    //then set the data-state to animate
    //else set src to data-still value
    console.log(state);
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  }

  //==========================================TRY 1
  // $(document).on("click", ".gifs", toggleGif);
  // function toggleGif() {
  //   //get index of image
  //   var temp = $(this).attr("id");
  //   term.split(/[0-9]+/);
  //   var ix = temp[3];
  //   var newId = "#num" + ix ;
  //
  //   if(currentURL) {
  //     currentURL = false;
  //
  //     //create variable to hold new url
  //     var newURL = response.data[ix].images.fixed_height.url;
  //
  //     //create element to display the new item
  //     var newEl = "<img src ='" + newURL + "'><p>Rating: " + response.data[ix].rating;
  //
  //     //replace on screen
  //     $(newId).html(newEl);
  //   }
  //
  //   else {
  //     currentURL = true;
  //
  //     //create variable to hold new url
  //     var newURL = response.data[ix].images.original_still.url;
  //
  //     //create element to display the new item
  //     var newEl = "<img src ='" + newURL + "'><p>Rating: " + response.data[ix].rating;
  //
  //     //replace on screen
  //     $(newId).html(newEl);
  //   }
  // }

  //=================================TRY 2
  //     //=====Week 6.3 pausing gifs student
  //     //on click function
  // $(".gifs").on("click", function() {
  //   //set the attribute data-state
  //   console.log(this);
  //   var state  = $(this).attr("data-state");
  //   //if the images state update is still, update the src attribute to its data-animate value
  //   //then set the image's data-state to animate
  //   //else set src to the data-still value
  //   if (state === "still") {
  //     $(this).attr("src", $(this).attr("data-animate"));
  //     $(this).attr("data-state", "animate");
  //   } else {
  //     $(this).attr("src", $(this).attr("data-still"));
  //     $(this).attr("data-state", "still");
  //   }
  //
  // });

        //create attributes as needed to match the example of still and animate.
        //have to create each attirbute


      // console.log(this);
      //
      // //assigning image url to variable
      // //=========VERIFY URL IS CORRECT
      // var imageUrl = response.data.image_original_url;
      //
      // //create a new img tag element
      // var animalImage = $("<img>");
      //
      // //use img element, add src and alt text
      // animalImage.attr("src", imageUrl);
      // animalImage.attr("alt", "animal image");
      //
      // $("#Animals").prepend(animalImage);

//Function for displaying the animal data
function renderButtons() {

  //Deletes the animals prior to adding new movies
  $("#animal-buttons").empty();
  //Loops through the array of animals
  for (var i = 0; i < animals.length; i++) {

    //generate animal buttons for each animal in the array
    var a = $("<button>");
    //Add a class to animal button
    a.addClass("animal");
    // add a data-attribute
    a.attr("data-name", animals[i]);
    //provided the initial button text
    a.text(animals[i]);
    //Added the button to the animal-buttons div
    $("#animal-buttons").append(a);
  }
}

//Function to handle events where the add animal button is clicked
$("#addAnimal").on("click", function(event) {
  event.preventDefault();
  //Grab input from textbook
  var animal = $("#animal-input").val().trim();

  //add animal from textbox to array
  animals.push(animal);

  //renderButtons handles the processing of the animal array
  renderButtons();
});

//Call renderButtons fucntion to display the initial buttons-view
renderButtons();

//Add click event listener to all elements with a class of animal
$(document).on("click", ".animal", displayAnimalGiphy);



});
