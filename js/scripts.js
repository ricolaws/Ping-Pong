

$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#number").val();
    $(".results" ).empty();
    $("#hidden").hide();

    for (var i = 1; i <= userInput; i++) {
      if (i%3===0 && i%15!=0) {
        $(".results").append("<li>ping</li>");
      }
      else if (i%5===0 && i%15!=0){
        $(".results").append("<li>pong</li>");
      }
      else if (i%15===0) {
        $(".results").append("<li>PING-PONG!</li>");
        $("#hidden").show();
      }
      else {
        $(".results").append("<li>" + i + "</li>");
      }
    }

    console.log(userInput);
  });
});
