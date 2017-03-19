$(document).ready(function(){
  eventListeners();
});

function eventListeners() {


  $("#buttons").on("click", "button", function() {
    console.log("a button has been clicked");

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
        // will need to later append to DOM...
      } //ends success
    }); //ends ajax post
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
// $("#clearButton").on("click", function() {
//   console.log("clearButton clicked");
// });
