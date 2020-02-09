$(document).ready(function() {
  slideEffectAjax();
  $(".open-close").on("click", function(e) {
    e.preventDefault();
    var $this = $(this);
    $this
      .parents(".v-megamenu-container")
      .find(".v-megamenu")
      .stop()
      .slideToggle();
    $(this).toggleClass("active");
    return false;
  });
  $().UItoTop({ easingType: "easeOutQuart" });
  $("#category-mobile").mmenu({
    offCanvas: {
      zposition: "front",
      position: "right"
    }
  });
  $("#menu-mobile").mmenu({
    offCanvas: {
      zposition: "front",
      position: "left"
    }
  });
  function slideEffectAjax() {
    var ww = $(window).width();
    if (ww > 767) {
      $(".cart-total").mouseenter(function() {
        $(this)
          .find(".cart-droplist__content")
          .stop(true, true)
          .slideDown();
      });

      $(".cart-total").mouseleave(function() {
        $(this)
          .find(".cart-droplist__content")
          .stop(true, true)
          .slideUp();
      });
    } else {
      $(".cart-total").click(function() {
        $(this)
          .find(".cart-droplist__content")
          .slideToggle(300);
      });
    }
  }
});
