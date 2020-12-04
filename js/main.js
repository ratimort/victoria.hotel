$(window).enllax({
type: 'background',
ratio: 0.5,
direction: 'vertical'
});

var myVar;
function myFunction() {
  myVar = setTimeout(showPage);
}
function showPage() {
  var body = document.getElementById("body")
  var all = document.getElementById("all")
  var element = document.getElementById("body")
  document.getElementById("loader").style.top = "-100%";
  // document.getElementById("myDiv").style.display = "block";
  body.classList.remove("body1")
  all.classList.remove("all-js")
}


$(window).scroll(function() {
var height = $(window).scrollTop();
if(height > 170){
$('.fade-menu').addClass("toggle");
$('.bottom-menu').addClass("toggle1");
} else{
$('.fade-menu').removeClass("toggle");
$('.bottom-menu').removeClass("toggle1");
// $(".slide-menu").slideToggle("slow");
}
});

$(document).ready(function(){
  $(".click-on").click(function(){
    $(".all, .bottom-menu, .fade-menu").addClass("all-1");
    $(".all, .bottom-menu, .fade-menu").removeClass("all-2");
    $(".black").css("display","block");
    $("body").css("overflow","hidden");
    $(".menu-sm").addClass("right-toggle");
  });
  $(".click-on-1").click(function(){
    $(".all, .bottom-menu, .fade-menu").removeClass("all-1");
    $(".menu-sm").removeClass("right-toggle");
    $(".black").css("display","none");
    $("body").css("overflow","auto");
    $(".all, .bottom-menu, .fade-menu").addclass("all-2");
  });
  $(".click-on-11, .all-form").click(function(){
    $(".form-numbers").fadeOut();
    $("body").css("overflow","auto");
    $('.fade-menu').addClass("toggle");
  });
  $(".fade-form").click(function(){
    $(".form-numbers").fadeIn();
    $("body").css("overflow","hidden");
    $('.fade-menu').removeClass("toggle");
  });





  $(".click-on-11-1, .all-form-1").click(function(){
    $(".form-numbers1").css("opacity","0");
    $(".form-numbers1").css("z-index","1");
    $("body").css("overflow","auto");
    $('.fade-menu').addClass("toggle");
  });
  $(".economy").click(function(){
    $(".economy-1").css("opacity","1");
    $(".economy-1").css("z-index","9999999999");
    $("body").css("overflow","hidden");
    $('.fade-menu').removeClass("toggle");
  });
  $(".standard").click(function(){
    $(".standard-1").css("opacity","1");
    $(".standard-1").css("z-index","9999999999");
    $("body").css("overflow","hidden");
    $('.fade-menu').removeClass("toggle");
  });
  $(".luxury").click(function(){
    $(".luxury-1").css("opacity","1");
    $(".luxury-1").css("z-index","9999999999");
    $("body").css("overflow","hidden");
    $('.fade-menu').removeClass("toggle");
  });
});
$(".prevent").click(function(event){   
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
});

$(document).ready(function() {
$('.owl-carousel').owlCarousel({
    loop:true,
    // autoplay:true,
    autoplayTimeout:6000,
    speed:2000,
    smartSpeed:2000,
    nav:true,
    responsive:{
        300:{
            items:1
        },
        400:{
            items:1
        },
        500:{
            items:1
        },
        600:{
            items:1
        }
    }
});
});
  wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       100,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();

myMap.behaviors.disable('scrollZoom');
 
//на мобильных устройствах... (проверяем по userAgent браузера)
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    //... отключаем перетаскивание карты
    myMap.behaviors.disable('drag');
}