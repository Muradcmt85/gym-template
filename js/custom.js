/*
 ==========   Js INDEX Table============

##== Plugins Activation
		#= Closes responsive menu when a scroll link is clicked
		#= Counter Activation
		#= Owl Carousel Main Slider
		#= Owl Carousel Feature Slider
		#= Slider Image Hover
		#= Image & Video popup
		#= Owl Carousel Team Slider 
		#= Owl Carousel Testimonial Slider 
		#= Scroll to top
		#= Hide Show icon
		#= Preloader

 ========== Js INDEX Table End ============

 */


(function ($) {
    'use strict';

	var windo = $(window);

	// Closes responsive menu when a scroll link is clicked
	$('.nav-link').on('click', function () {
	$('.navbar-collapse').collapse('hide');
	});
	
	window.onscroll = function() {myFunction()};

	var navbar = document.getElementById("sticky-nav");
	var sticky = navbar.offsetTop;

	function myFunction() {
	  if (window.pageYOffset >= sticky) {
	    navbar.classList.add("sticky")
	  } else {
	    navbar.classList.remove("sticky");
	  }
	};


	// counter js just ai code dule hobe counter ai tai man kono plugin lagbe nah
	$('.counter').each(function () {
	    $(this).prop('Counter',0).animate({
	        Counter: $(this).text()
	    }, {
	        duration: 4000,
	        easing: 'swing',
	        step: function (now) {
	            $(this).text(Math.ceil(now));
	        }
	    });
	});


	// Counter js End here


	//Main Owl Carousel Start here

	$('.main-slider').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    dots:false,
	    autoplay:false,
	    smartSpeed:1500,
	    items:1,
	    autoplayTimeout:2000,
	    responsive:{
	        0:{
	    		dots:true,
	    		nav:false,
	        },
	        768:{
	    		dots:true,
	    		nav:false,
	        },
	        1200:{
	    		dots:false,
	    		nav:true,
	        }
	    }
	});

//Feature Owl Carousel Start here

	$('.feature-slide').owlCarousel({
	    loop:true,
	    margin:20,
	    nav:false,
	    dots:true,
	    autoplay:false,
	    smartSpeed:1000,
	    autoplayTimeout:1500,
	    responsive:{
	        0:{
	            items:1
	        },
	        320:{
	            items:1
	        },
	        768:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	});

	// Slider image hover
	  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );




	// magnific activition are here

	$('.view').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
			},
		  // other options
		});

	$('.video-view').magnificPopup({
		  type: 'iframe',
		});

	// magnific activition end here

	// Owl Carousel team seciton Start here

	$('.team').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:false,
	    dots:true,
	    autoplay:false,
	    smartSpeed:1000,
	    autoplayTimeout:1500,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        768:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	});
	// Owl Carousel team seciton end here

	// Owl Carousel Testimonial seciton Start here

	$('#testimonial-slider').owlCarousel({
	    loop:true,
	    margin:20,
	    nav:false,
	    dots:true,
	    autoplay:false,
	    smartSpeed:1000,
	    autoplayTimeout:1500,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        992:{
	            items:2
	        },
	        1000:{
	            items:2
	        }
	    }
	});
	// Owl Carousel Testimonial seciton end here


		// scroll Top  button a click
		var html_body = $('html, body');
		$('.navbar a').on('click', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
		html_body.animate({
		scrollTop: target.offset().top - 100
		}, 1500);
		return false;
		}
		}
		});

		// scroll Top  button a click


		// scroll top seciton start here

		  var scrollTop = $(".scrollTop");

		  $(window).scroll(function() {
		    // declare variable
		    var topPos = $(this).scrollTop();

		    // if user scrolls down - show scroll to top button
		    if (topPos > 100) {
		      $(scrollTop).css("opacity", "1");

		    } else {
		      $(scrollTop).css("opacity", "0");
		    }

		  }); // scroll END

		  //Click event to scroll to top
		  $(scrollTop).click(function() {
		    $('html, body').animate({
		      scrollTop: 0
		    }, 800);
		    return false;

		  }); // click() scroll top EMD


		  // Scroll top End here

		 //When responsive this seciton active this time
		new WOW().init();
		$(".hide").click(function(){
			$("#hide").toggle(500);
		});

		//preloader js start here
		$(window).on('load', function () {
		$("#preloader").delay(1000).fadeOut(1000);
		});

		//preloader js end here

})(jQuery);	
