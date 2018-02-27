/**
 * Theme JS v1.0.0
 * Copyright 2017 by TuduThemes
 * Licensed under  ()
 */
(function($) {
	"use strict"; 
	jQuery(document).ready(function($) {
        $('.carousel-2').owlCarousel({
            loop: false,
            nav: true,
            dots: true,
            mouseDrag: true,
            touchDrag: true,
            autoplay: false,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                360: {
                    items: 1,
                },
                480: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                800: {
                    items: 2,
                },
                980: {
                    items: 2,
                },
                1200: {
                    items: 2,
                },
                1600: {
                    items: 2,
                }
            }
        });
        $('.carousel-3').owlCarousel({
            loop: false,
            nav: true,
            dots: false,
            mouseDrag: true,
            touchDrag: true,
            autoplay: false,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                360: {
                    items: 1,
                },
                480: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                800: {
                    items: 2,
                },
                980: {
                    items: 3,
                },
                1200: {
                    items: 3,
                },
                1600: {
                    items: 3,
                }
            }
        });
        $('.owl-brands').owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            mouseDrag: true,
            touchDrag: true,
            autoplay: false,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                360: {
                    items: 2,
                },
                480: {
                    items: 3,
                },
                600: {
                    items: 3,
                },
                768: {
                    items: 4,
                },
                800: {
                    items: 5,
                },
                980: {
                    items: 5,
                },
                1200: {
                    items: 6,
                },
                1600: {
                    items: 6,
                }
            }
        });

        $('.owl-small-videos').owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            mouseDrag: true,
            touchDrag: true,
            autoplay: false,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                360: {
                    items: 2,
                },
                480: {
                    items: 2,
                },
                600: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                800: {
                    items: 3,
                },
                980: {
                    items: 4,
                },
                1200: {
                    items: 4,
                },
                1600: {
                    items: 4,
                }
            }
        });
    });
    
    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var device = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if(device < 480) {
        var slidesPerPage = 3;
    }else if(device < 768){
        var slidesPerPage = 3;
    }else {
        var slidesPerPage = 4; //globaly define number of elements per page
    }
    //alert(device);
    var syncedSecondary = true;

    sync1.owlCarousel({
        items : 1,
        slideSpeed : 2000,
        nav: false,
        autoplay: false,
        dots: false,
        loop: true,
        responsiveRefreshRate : 200,
        // navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ]
    }).on('changed.owl.carousel', syncPosition);

    sync2
    .on('initialized.owl.carousel', function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
        items : slidesPerPage,
        dots: false,
        nav: false,
        smartSpeed: 200,
        slideSpeed : 500,
        slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
        responsiveRefreshRate : 100,
        navText: [
            "<div class='br'><i class='fa fa-angle-left'></i></div>",
            "<div class='br'><i class='fa fa-angle-right'></i></div>"
        ]
    }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count-1;
        var current = Math.round(el.item.index - (el.item.count/2) - .5);

        if(current < 0) {
          current = count;
        }
        if(current > count) {
          current = 0;
        }

        //end block

        sync2
          .find(".owl-item")
          .removeClass("current")
          .eq(current)
          .addClass("current");

        var des = sync2
          .find(".owl-item")
          .eq(current)
          .find(".item").data('des');
        $(".gallery-des").html(des);

        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
          sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
          sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if(syncedSecondary) {
          var number = el.item.index;
          sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function(e){
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
})(jQuery);