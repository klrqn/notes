<script>
$(document).ready(function(){ // run after everything has loaded
  $("element").addClass("someClass");
  $(".class").addClass("someClass");
  $("#id").addClass("someClass");
  $("div").removeClass("someClass"));
  $("h1").css("color", "blue"); 
  $("button").prop("disabled", true);
  $("h3").html("<em>jQuery Playground</em>");
  $("h3").text("jQuery Playground"); //only alters text without adding tags
  $("#id").remove();
  $("#target2").clone().appendTo("#right-well");
  
  $("#id").parent().css("background-color", "blue"); // target parent 
  $("#left-well").children().css("color", "blue") // target children
  $(".target:nth-child(3)").addClass("animated bounce"); // target 3rd child
  
  $("body").addClass("animated fadeOut");
});
</script>

// Get JSON Data and Display.
$("#getMessage").on("click", function() {
  $.getJSON("/json/cats.json", function(json) { // gets json
    var html = "";
    json.forEach(function(val) {
      var keys = Object.keys(val);
      html += "<div class = 'cat'>";
      keys.forEach(function(key) {
        html += "<strong>" + key + "</strong>: " + val[key] + "<br>";               // adds key and value text
        html += "<img src= '" + val.imageLink + "'" + "alt=;" + val.altText + "'>"; // adds image
    });
    html += "</div><br>";
  });