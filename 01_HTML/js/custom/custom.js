// JavaScript Document

/*
Custom.js file includes following

- CAROUSEL SLIDER
- TO TOP
- PARALLAX
- FITVID
- PRELOADER
- COUNTER UP
- MAGNIFIC POPUP
- STICKY NAV 
*/


$(document).ready(function() {

    'use strict';

    /************************************************************************************ CAROUSEL SLIDER STARTS */

    var owl = $('.testimonial-carousel');
    owl.owlCarousel({

        autoplay: false,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    /************************************************************************************ CAROUSEL SLIDER ENDS */

    /************************************************************************************ TO TOP STARTS */

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });


    /************************************************************************************ TO TOP ENDS */

    /************************************************************************************ PARALLAX STARTS */

    $('.parallax-1').parallax("50%", 0.5);
    $('.parallax-2').parallax("50%", 0.5);
    $('.parallax-3').parallax("50%", 0.5);
    $('.parallax-4').parallax("50%", 0.1);
    $('.parallax-5').parallax("50%", 0.1);
    $('.parallax-6').parallax("50%", 0.1);


    /************************************************************************************ PARALLAX ENDS */

    /************************************************************************************ FITVID STARTS */

    $(".fitvid").fitVids();

    /************************************************************************************ FITVID ENDS */

    /************************************************************************************ PRELOADER STARTS */

    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.


    /************************************************************************************ PRELOADER ENDS */

    /************************************************************************************ COUNTER UP STARTS */

    $('.count').counterUp({
        delay: 10,
        time: 1000
    });

    /************************************************************************************ COUNTER UP ENDS */

    /************************************************************************************ MAGNIFIC POPUP STARTS */

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        /*disableOn: 700,*/
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }

    });

    /************************************************************************************ MAGNIFIC POPUP ENDS */

    /************************************************************************************ STICKY NAV STARTS */

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
            $('.navigation').addClass("sticky");
            $('.navigation').removeClass("normal");
        } else {
            $('.navigation').removeClass("sticky");
            $('.navigation').addClass("normal");
        }
    });

    /************************************************************************************ STICKY NAV ENDS */

});