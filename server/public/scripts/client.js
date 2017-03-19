$(document).ready(function(){
  eventListeners();
});

function eventListeners() {

  // $("#clearButton").on("click", function() {
  //   console.log("clearButton clicked");
  //   $(".container").empty();
  //
  // });

  $("#buttons").on("click", "button", function() {
    console.log("an operator button has been clicked");
    var buttonId = $(this).attr('id');
    if (buttonId == "addButton" || buttonId == "subtractButton" || buttonId ==  "multiplyButton" || buttonId == "divideButton") {
    console.log($(this).attr('id'));
    //gets user input, assembles into object
    var objectToSend = {
      x: $('#valOne').val(),
      y: $('#valTwo').val(),
      type: ($(this).attr('id'))
    };

    $.ajax({
      type: 'POST',
      url: '/calculator',
      data: objectToSend,
      success: function( response ) {
        console.log('back from calculator with: ', response);
        $('.container').append( '<p> Your result is: ' + response + '</p>');
      } //ends success
    }); //ends ajax post
  }
  else {
      console.log("clearButton clicked");
      $(".container").empty();
  }

  });//ends buttons listener


} //end eventListeners

// $("#addButton").on("click", function() {
//   console.log("addButton clicked");
// });
//
// $("#subtractButton").on("click", function() {
//   console.log("subtractButton clicked");
// });
//
// $("#multiplyButton").on("click", function() {
//   console.log("multiplyButton clicked");
// });
//
// $("#divideButton").on("click", function() {
//   console.log("divideButton clicked");
// });
//
