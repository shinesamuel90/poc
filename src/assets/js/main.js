
jQuery(function ($) {

    'use strict';

    //  Slick Slider
    //  Tooltip
    //  Remove Item
    //  Tr-Change
    //  Animationend
    //  Jquery Ui priceRange

    // -------------------------------------------------------------
    // Drop Menu
    // -------------------------------------------------------------    

    (function () {

        var $content = $('.tr-menu-content');
        $('.tr-toggle-menu').on('click', function () {
            $content.addClass('menu-open');
        });
        $('.close-menu').on('click', function () {
            $content.removeClass('menu-open');
        });

    }());       
      
    // -------------------------------------------------------------
    // Search
    // -------------------------------------------------------------

    (function () {

        $(".tr-search .search-icon").on('click', function() {
        if ($(this).hasClass('opened')) {
            $(this).removeClass('opened');
            $('.search-icon i').removeClass('active-search').addClass('fa-search');
            $('.search-form').fadeOut('slow').removeClass('').addClass('');
        } else {
            $(this).addClass('opened');
            $('.search-icon i').addClass('active-search').removeClass('fa-search');
            $(".tr-search .search-form").fadeIn('slow').removeClass('').addClass('');
        }
        });
        $("body").on('click', function() {
            $('.tr-search .search-icon').removeClass('opened');
            $('.search-icon i').removeClass('active-search').addClass('fa-search');
            $('.tr-search .search-form').fadeOut('slow').removeClass('').addClass('');
        });
        $('.tr-search').on('click', function(e) {
            e.stopPropagation();
        });

    }()); 

    // -------------------------------------------------------------
    //  Toggle Menu for Mobile
    // -------------------------------------------------------------

    mobileDropdown ();
    function mobileDropdown () {
      if($('.tr-menu').length) {
        $('.tr-menu .tr-dropdown').append(function () {
          return '<i class="fa fa-caret-down icon" aria-hidden="true"></i>';
        });
        $('.tr-menu .tr-dropdown .icon').on('click', function () {
          $(this).parent('li').children('ul').slideToggle();
        });
      }
    }        
      
    
    // -------------------------------------------------------------
    //  Slick Slider
    // -------------------------------------------------------------  

    (function() {
      
        $(".product-slider").slick({
            infinite: true,
            dots: true,
            slidesToShow: 3,
            autoplay:true,
            autoplaySpeed:10000,
            slidesToScroll: 1,
            responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
            ]        
        }); 

        $(".cta-slider").slick({
            infinite: true,
            dots: true,
            slidesToShow: 1,
            autoplay:true,
            autoplaySpeed:10000,
            slidesToScroll: 1      
        }); 

        $(".image-slider").slick({
            infinite: true,
            dots: true,
            slidesToShow: 1,
            autoplay:false,
            autoplaySpeed:10000,
            slidesToScroll: 1      
        }); 

        $(".brands-slider").slick({
            infinite: true,
            dots: true,
            slidesToShow: 4,
            autoplay:true,
            autoplaySpeed:10000,
            slidesToScroll: 1,
            responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 1,
              }
            }
            ]        
        });  

        $(".product-details-slider").slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',            
            infinite: true,
            dots: true,
            slidesToShow: 1,
            autoplay:true,
            autoplaySpeed:10000,
            slidesToScroll: 1      
        });                                 

    }());
    

    // -------------------------------------------------------------
    //  Tooltip
    // -------------------------------------------------------------

    (function() {

        $('[data-toggle="tooltip"]').tooltip();

    }());


    // -------------------------------------------------------------
    //  Remove Item
    // -------------------------------------------------------------

    (function() {

        $( ".remove-icon" ).on('click', function() {
            $(this).parents('.remove-item').fadeOut();
        });

    }());

    
    // -------------------------------------------------------------
    //  Tr-Change
    // -------------------------------------------------------------

   (function() {

        $('.tr-dropdown').on('click', '.tr-change a', function(ev) {
            if ("#" === $(this).attr('href')) {
                ev.preventDefault();
                var parent = $(this).parents('.tr-dropdown');
                parent.find('.change-text').html($(this).html());
            }
        });

    }()); 

  /*==============================================================*/
  // Animationend
  /*==============================================================*/

    (function( $ ) {

        //Function to animate slider captions 
        function doAnimations( elems ) {
            //Cache the animationend event in a variable
            var animEndEv = 'webkitAnimationEnd animationend';
            
            elems.each(function () {
                var $this = $(this),
                    $animationType = $this.data('animation');
                $this.addClass($animationType).one(animEndEv, function () {
                    $this.removeClass($animationType);
                });
            });
        }
        
        //Variables on page load 
        var $myCarousel = $('#home-carousel'),
            $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
            
        //Initialize carousel 
        $myCarousel.carousel();
        
        //Animate captions in first slide on page load 
        doAnimations($firstAnimatingElems);
        
        //Pause carousel  
        $myCarousel.carousel('pause');
        
        //Other slides to be animated on carousel slide event 
        $myCarousel.on('slide.bs.carousel', function (e) {
            var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
            doAnimations($animatingElems);
        });  
        
    })(jQuery);      


    // -------------------------------------------------------------
    //  Jquery Ui priceRange
    // -------------------------------------------------------------

    $( function() {
        $( "#price_slider" ).slider({
        range: true,
        min: 0,
        max: 3000,
        values: [ 0, 3000 ],
        slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
        });
        $( "#amount" ).val( "$" + $( "#price_slider" ).slider( "values", 0 ) +
        " - $" + $( "#price_slider" ).slider( "values", 1 ) );
    } );

     
    
// script end
});

