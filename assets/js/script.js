$(document).ready(function () {
  // Add active class to the current button (highlight it)
  var header = document.getElementById("navigation");
  var btns = header.getElementsByClassName("nav-link");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
  // Show the div in 5s
  $(".preloader").delay(0).fadeIn(100);
  $(".preloader").delay(500).fadeOut(100);

});
//scroll spy
$(document).ready(function () {
  $('body').scrollspy({
    target: ".navbar",
    offset: 50
  });
//backto top
$(window).scroll(function() {
  if ($(this).scrollTop() > 600) {
    $(".scrollup").fadeIn();
  } else {
    $(".scrollup").fadeOut();
  }
})
$(".scrollup").click(function() {
  $("html, body").animate({
    scrollTop: 0
  }, 600);
  return false;
})
//progressbar
var waypoint = new Waypoint({
  element: document.getElementById('more'),
  handler: function() {
    $(".progressbar-1").animate({
      width: "80%",
    }, 1500);
    $(".progressbar-2").animate({
      width: "95%",
    }, 1500);
 
  }
})

});

var $grid = $('.grid').isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
});

// change is-checked class on buttons
var $buttonGroup = $('.filters');
$buttonGroup.on( 'click', 'li', function( event ) {
  $buttonGroup.find('.is-checked').removeClass('is-checked');
  var $button = $( event.currentTarget );
  $button.addClass('is-checked');
  var filterValue = $button.attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
// window.onload = function(){ document.querySelector(".preloader").style.display = "none"; }
