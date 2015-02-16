$(document).ready(function() {
  $("form#places").submit(function(event) {
    event.preventDefault();

    var name = $("input#name").val();
    var location = $("input#location").val();
    var timeOfYear = $("input#time-of-year").val();
    var notes = $("input#notes").val();
    var newPlace = { name: name, location: location, timeYear: timeOfYear, note: notes };

    $("ul#places").append("<li><span class='place'>" + newPlace.name + "</span></li>");

    $("input#name").val("");
    $("input#location").val("");
    $("input#time-of-year").val("");
    $("input#notes").val("");

    $("#places li").last().click(function() {
      $("#show-places").show();
      $("#show-places h2").text(newPlace.name);
      $(".location").text(newPlace.location);
      $(".time-of-year").text(newPlace.timeYear);
      $(".notes").text(newPlace.note);
    });
  });
});
