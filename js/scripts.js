$(function() {
  $(".clickable").click(function() {
    $("#manatee-showing").fadeToggle();
    $("#manatee-hide").fadeToggle();
  });
});

$(function() {
  $(".clickable2").click(function() {
    $("#manatee2-showing").slideToggle();
  });
});


$(function() {
  $(".btn-clickable").click(function() {
    $(".castle-showing").slideToggle();
  });
});
