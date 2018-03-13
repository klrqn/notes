<script>
$(document).ready(function(){
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