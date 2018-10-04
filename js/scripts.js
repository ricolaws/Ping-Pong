// var userInput
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#number").val();
    console.log(userInput);
  });
});
