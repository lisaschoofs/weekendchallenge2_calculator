$(document).ready(function(){
  eventListeners();
});

function eventListeners() {

  $("#addButton").on("click", function() {
    console.log("addButton clicked");
  });

  $("#subtractButton").on("click", function() {
    console.log("subtractButton clicked");
  });

  $("#multiplyButton").on("click", function() {
    console.log("multiplyButton clicked");
  });

  $("#divideButton").on("click", function() {
    console.log("divideButton clicked");
  });

  $("#clearButton").on("click", function() {
    console.log("clearButton clicked");
  });

} //end eventListeners
