$(document).ready(function(){
  $(".A").click(function(){
    $("img").show();
  });
})

$( ".B").click(function(){
  $("img").hide();
});

$(".two h1").dblclick(function(){
  $(".two h1").toggleClass("styleSwitch");
  });

$(".add").click(function(){
  $("ul").append("<li>Add</li>");
});

$(".four p").hover(function(){
  $(this).toggleClass("hoverover");
});

$(".five h2").mouseleave(function(){
  $(".five p").slideUp("slow");
});

$(".six p").hover(function(){
  $(".six p").fadeOut("slow");
});

$(".over").click(function(){
  $(".six p").fadeIn("slow");
});
