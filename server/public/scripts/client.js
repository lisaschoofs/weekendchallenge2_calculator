$(document).ready(function(){
  eventListeners();
});


function eventListeners() {

  //sets up button event listener
  $("#buttons").on("click", "button", function() {
    console.log("an operator button has been clicked");

    //sets up variable to simplify the button's id in function
    var buttonId = $(this).attr('id');

    //sets ups initial 'if/else' statement to ensure 2 numbers have been added to inputs
    // before operator is selected
    if (($('#valOne').val() === '') || ($('#valTwo').val() === '') ) {
      //tell the user to put in two numbers
      $('#results').append( '<p> Whoops! Remember to plug in 2 numbers! </p>');
    }

    //if two numbers have been added to the input, go ahead and calculate!
    else {

      //if the button is a mathematical operation choice, create and object and send it to the server
      if (buttonId == "addButton" || buttonId == "subtractButton" || buttonId ==  "multiplyButton" || buttonId == "divideButton") {

      //gets user input, assembles into object
      var objectToSend = {
        x: $('#valOne').val(),
        y: $('#valTwo').val(),
        type: buttonId
      };

      //ajax post to send inputs object to server
      $.ajax({
        type: 'POST',
        url: '/calculator',
        data: objectToSend,
        success: function( response ) {
          console.log('back from calculator with: ', response);
          //appends final calculation to the DOM
          $('#results').append( '<p> Your result is: ' + response + '</p>');
        } //ends success
      }); //ends ajax post
    }

    //else statement for clear button - empties old results from div,
    // and resets input fields.
    else {
        console.log("clearButton clicked");
        $("#results").empty();
        valOne.value = '';
        valTwo.value = '';
      }
    } //ends initial if/else that verifies numbers have been submitted

  });//ends #buttons listener


} //end eventListeners function
