$(document).ready(function(){
  eventListeners();
});

function eventListeners() {

  $("#addButton").on("click", function() {
    console.log("addButton clicked");
  });

  $("#subtractButton").on("click", function() {
    console.log("substractButton clicked");
  });

  $("#multiplyButton").on("click", function() {
    console.log("multiplyButton clicked");
  });

  $("#divideButton").on("click", function() {
    console.log("divideButton clicked");
  });


} //end eventListeners
