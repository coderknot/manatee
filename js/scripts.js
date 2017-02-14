$(function() {
  $(".clickable").click(function() {
    $("#manatee-showing").fadeToggle();
    $("#manatee-hide").fadeToggle();
  });

  $(".clickable2").click(function() {
    $("#manatee2-showing").slideToggle();
  });

  $(".btn-clickable").click(function() {
    $(".castle-showing").slideToggle();
  });

  $("button#dark").click(function() {
    $("body").addClass("dark-background")
  })
});
