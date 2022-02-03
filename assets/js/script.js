

window.onload = function () {
  $(".preloader").delay(0).fadeIn(100);
  $(".preloader").delay(100).fadeOut(250);
  AOS.init({
    offset: 150,
    duration: 700,
    easing: 'ease-out-back',
    delay: 150,
    once: true,
    disable: 'mobile' //disable the animation on mobile
});
}

$(document).ready(function () {
  var header = document.getElementById("navigation");
  var btns = header.getElementsByClassName("nav-link");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
});
//Scroll spy
$(document).ready(function () {
  $("body").scrollspy({
    target: ".navbar",
    offset: 50,
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      $(".scrollup").fadeIn();
    } else {
      $(".scrollup").fadeOut();
    }
  });
  $(".scrollup").click(function () {
    $("html, body").animate({
        scrollTop: 0,
      },
      600
    );
    return false;
  });


  //Progress Bar: Change The Width
  var waypoint = new Waypoint({
    element: document.getElementById("services"),
    handler: function () {
      $(".progressbar-1").animate({
          width: "45%",
        },
        1500
      );
      $(".progressbar-2").animate({
          width: "95%",
        },
        1500
      );
    },
  });
});