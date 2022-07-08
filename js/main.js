$(document).ready(function () {
  var owl = $('.highlightside');
  var event = $('.eventsides');
  var preslides = $('.preeventslides');
  var footerslides = $('.footerslides');
  owl.owlCarousel({
    // items change number for slider display on desktop
    loop: true,
    autoplay: false,
    dots: false,
    nav: true,
    items: 1,
    smartSpeed: 1000,
    navText: [
      "<div class='nav-btn prev-slide'><i class='bi bi-arrow-left'></i></div>",
      "<div class='nav-btn next-slide'><i class='bi bi-arrow-right'></i></div>",
    ],
  });
  event.owlCarousel({
    // items change number for slider display on desktop
    loop: true,
    autoplay: false,
    nav: true,
    dots: false,
    items: 1,
    smartSpeed: 1000,
    navText: [
      "<div class='nav-btn prev-slide'><i class='bi bi-arrow-left'></i></div>",
      "<div class='nav-btn next-slide'><i class='bi bi-arrow-right'></i></div>",
    ],
  });
  preslides.owlCarousel({
    items: 4,
    // items change number for slider display on desktop
    loop: true,
    autoplay: false,
    nav: true,
    smartSpeed: 1000,
    margin: 15,
  });
  footerslides.owlCarousel({
    items: 1,
    // items change number for slider display on desktop
    loop: true,
    autoplay: true,
    nav: false,
    dots: true,
    smartSpeed: 1000,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  });
});
