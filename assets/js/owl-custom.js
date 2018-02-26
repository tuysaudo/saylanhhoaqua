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
                    items: 4,
                },
                980: {
                    items: 5,
                },
                1200: {
                    items: 5,
                },
                1600: {
                    items: 6,
                }
            }
        });
    });
	
})(jQuery);