
(function($){
	$(function(){

        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });

        // Phone nav click function
        $('.phone-nav').click(function () {
            $("body").toggleClass("navShown");
            $(".nav-wrap").slideToggle()
        });
        
        //For Beer Menu
        $('li.shop-beer-trigger a').click(function (e) {
            e.preventDefault();
            $("body").addClass("beer-cart-open");
          
        });
        $('.beer-menu-area').click(function () {
            $("body").removeClass("beer-cart-open");
        });
        $('.beer-menu-inner').click(function (e) {
           e.stopPropagation();
        });
        
        
        //For Cart
        $('.cart').click(function () {
            $("body").addClass("cart-open");
        });
        $('.checkout-wrap').click(function () {
            $("body").removeClass("cart-open");
        });
        $('.checkout-inner').click(function (e) {
            e.stopPropagation();
        });
        
        
        /*Header on scroll*/
        var header = new Headroom(document.querySelector(".main-header-section"), {
            tolerance: 5,
            offset: 205,
            classes: {
                initial: "headroom",
                pinned: "header-fixed",
                unpinned: "header-static"
            }
        });

        header.init();

        
        
      
        if ($('.products-item-wrap').length) {
            $('.products-item-wrap').slick({
                arrows: false,
                infinite: true,
                autoplay: false,
                navigation: false,
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 9999999,
                        settings: "unslick"
                        },

                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            swipe: true,
                        }
                    },
                ]
            });
            $(window).on('resize', function () {
                $('.products-item-wrap').slick('resize');
            });
        }





        if ($('.marque-wrap').length) {
        $('.marque-wrap').slick({
                speed: 5000,
                autoplay: true,
                autoplaySpeed: 0,
                centerMode: true,
                cssEase: 'linear',
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                infinite: true,
                initialSlide: 1,
                arrows: false,
                buttons: false
            });
            
            $(window).on('resize', function () {
                $('.marque-wrap').slick('resize');
            });
            
        }
   

        if ($('.footer-social-wrap').length) {
            $('.footer-social-wrap').slick({
                speed: 5000,
                autoplay: true,
                autoplaySpeed: 0,
                centerMode: true,
                cssEase: 'linear',
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                infinite: true,
                initialSlide: 1,
                arrows: false,
                buttons: false,

                responsive: [
                    {
                        breakpoint: 769,
                        settings: "unslick"
                    },
                ]
            });

            $(window).on('resize', function () {
                $('.footer-social-wrap').slick('resize');
            });

        }
        
        
        
        
        // ANIMATION CHECK IF IN VIEW
        var $animation_elements = $('.anim-el');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var insetAmount = window_height / 20 // fifth of the screen
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height) - insetAmount;

            $.each($animation_elements, function () {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if (element_top_position <= window_bottom_position) {
                    $element.addClass('in-view');
                }
            });
        }
        $window.on('scroll orientationchange resize', check_if_in_view);
        $window.trigger('scroll');

        
        
        if($(window).width() > 768){
            if($('.mission-wrap').length){
                var $pos_elements = $('.mission-overlay');
                var $window = $(window);

                function check_if_in_view() {
                    var window_height = $window.height();
                    var window_top_position = $window.scrollTop();
                    var window_bottom_position = (window_top_position + window_height);

                    $.each($pos_elements, function() {
                        var $element = $(this);
                        var element_height = $element.outerHeight();
                        var element_top_position = $element.offset().top;
                        var element_bottom_position = (element_top_position + element_height);

                        //check to see if this current container is within viewport
                        if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)){
                            $element.addClass('stratParallax');
                        } else {
                            $element.removeClass('stratParallax');
                        }
                    });
                }

                $window.on('scroll resize', check_if_in_view);
                $window.trigger('scroll');


                $(window).scroll(function(){

                    var wScroll = $(this).scrollTop()

                    $(".mission-overlay figure:nth-child(2)").css({
                        "transform" : "translate(0px, -" + wScroll/ 10 + "%)"
                    })

                });
            }


        };
        if($(window).width() > 768){
            if($('.newsletter-wrap').length){
                var $pos_elements = $('.newsletter-shape');
                var $window = $(window);

                function check_if_in_view() {
                    var window_height = $window.height();
                    var window_top_position = $window.scrollTop();
                    var window_bottom_position = (window_top_position + window_height);

                    $.each($pos_elements, function() {
                        var $element = $(this);
                        var element_height = $element.outerHeight();
                        var element_top_position = $element.offset().top;
                        var element_bottom_position = (element_top_position + element_height);

                        //check to see if this current container is within viewport
                        if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)){
                            $element.addClass('stratParallax');
                        } else {
                            $element.removeClass('stratParallax');
                        }
                    });
                }

                $window.on('scroll resize', check_if_in_view);
                $window.trigger('scroll');


                $(window).scroll(function(){

                    var wScroll = $(this).scrollTop()

                    $(".newsletter-shape").css({
                        "transform" : "translate(0px, -" + wScroll/ 40 + "%)"
                    })

                });
            }


        };
        
        
        

	})// End ready function.
   


})(jQuery)

