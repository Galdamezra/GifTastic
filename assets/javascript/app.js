//Starting animals
var animals = ["dog", "cat", "bird"];

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
      console.log(this);

      //assigning image url to variable
      var imageUrl = response.data.image_original_url;

      //create a new img tag element
      var animalImage = $("<img>");

      //use img element, add src and alt text
      animalImage.attr("src", imageUrl);
      animalImage.attr("alt", "animal image");

      $("#Animals").prepend(animalImage);

      });

  }

//Function for displaying the movie data
function renderButtons() {

  //Deletes the movies prior to adding new movies
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

//Add click event listener to all elements with a class of animal
$(document).on("click", "animal", displayAnimalGiphy);

//Call renderButtons fucntion to display the initial buttons-view
renderButtons();
