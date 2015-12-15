// main.js for star wars demo site


// ***** WHEN PAGE HAS LOADED, RUN JS *****
$(document).ready(function(){

	// initialize animation libraries
	smoothScroll.init({offset: 90}); // offset option to account for fixed nav bar

	// ***** SCROLL TO TOP *****
	// hide 'scroll to top' button by default
	if (window.scrollY < 400) {
		$("#to-top").hide();
	} else {
		$("#to-top").show();
	}
	// show 'scroll to top' button when you have scrolled down
	// a certain amount on the page
	$(window).scroll(function() {
		if (window.scrollY < 400 && window.innerWidth > 760) {
			$("#to-top").fadeOut(600);
		} else if (window.scrollY >= 400 && window.innerWidth > 760) {
			$("#to-top").fadeIn(600);
		}
	});
	// scroll to top of page when 'scroll to top' button is clicked on
	$("#to-top").click(function(event) {
		event.preventDefault();
	    $("html, body").animate({
	        scrollTop: 0
	    }, 600);
	});


	// ***** SET DEFAULTS ON RESIZE WINDOW FOR MOBILE LAYOUT *****
	$(window).resize(function() {
		if (window.innerWidth > 760) {
			$("#mobile-nav-btn").hide();
			$(".menu").show();
			$(".dropdown-menu").slideDown();
			$(".arrow").addClass("arrow-down");
			$(".arrow").removeClass("arrow-left");
		} else {
			$("#mobile-nav-btn").show();
			$(".menu").hide();
			$(".dropdown-menu").slideUp();
			$(".arrow").removeClass("arrow-down");
			$(".arrow").addClass("arrow-left");
		}
	});


	// ***** MOBILE NAVIGATION *****
	// show mobile navigation menu when button is clicked
	$("#mobile-nav-btn").click(function () {
		$(".dropdown-menu").slideUp();
		$(".menu").fadeToggle(600);
		$(".arrow").removeClass("arrow-down");
		$(".arrow").addClass("arrow-left");
	});
	
	// accordion-style dropdown for mobile menu
	$(".dropdown .links").click(function(event) {
		event.preventDefault();
		if (window.innerWidth <= 760) {
			$(".dropdown-menu").slideToggle();
			// deal with dropdown arrow specifically for mobile
			if ($(".arrow").hasClass("arrow-left")) {
				$(".arrow").addClass("arrow-down");
				$(".arrow").removeClass("arrow-left");
			} else if ($(".arrow").hasClass("arrow-down")) {
				$(".arrow").removeClass("arrow-down");
				$(".arrow").addClass("arrow-left");
			}
		}
	});

	// hide the mobile menu after any link is clicked
	$(".menu > .links, .sub-links").click(function(event) {
		event.preventDefault();
		if (window.innerWidth <= 760) {
			$(".menu").fadeToggle(600);
		}
	})

});
