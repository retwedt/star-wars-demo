// main.js for star wars demo site


// ***** WHEN PAGE HAS LOADED, RUN JS *****
$(document).ready(function(){

	// initialize animation libraries
	smoothScroll.init({offset: 60}); // offset option to account for fixed nav bar


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
		if (window.scrollY < 400) {
			$("#to-top").fadeOut(600);
		} else if (window.scrollY >= 400) {
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


	// ***** RESET DEFAULTS WHEN WINDOW IS RESIZED *****
	$(window).resize(function() {
		if (window.innerWidth > 760) { // for desktop
			$("header").css({"height": "92px", "min-height": "1%"});
			$(".dropdown-menu").slideDown(10);
			$(".arrow").addClass("arrow-down");
			$(".arrow").removeClass("arrow-left");
			hidden = true;
		} else { // for mobile
			$(".arrow").removeClass("arrow-down");
			$(".arrow").addClass("arrow-left");
		}
	});
	// get initial state of mobile nav panel (hidden = true)
	var hidden = true;
	$("#mobile-nav-btn").click(function () {
		// close dropdown menu by default
		$(".dropdown-menu").slideUp(10);
		// when menu is shown, animate header to cover entire height of screen
		if (!hidden) {
			$("header").animate({minHeight: "1%"}, "ease");
			hidden = !hidden;
		} else {
			$("header").animate({minHeight: "100%"}, "ease");
			hidden = !hidden;
		}
	});
	// accordion-style dropdown for mobile menu
	$(".dropdown .links").click(function(event) {
		event.preventDefault();
		if (window.innerWidth <= 760) {
			$(".dropdown-menu").slideToggle();
			// change dropdown arrow specifically for mobile
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
			$("header").animate({minHeight: "1%"}, "ease");
			$(".dropdown-menu").slideUp();
			$(".arrow").removeClass("arrow-down");
			$(".arrow").addClass("arrow-left");
			hidden = !hidden;
		}
	})
});
