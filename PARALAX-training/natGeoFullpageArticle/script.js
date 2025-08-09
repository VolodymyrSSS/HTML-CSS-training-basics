if (window.jQuery) {
    console.log("jQuery loaded!");
} else {
    console.error("jQuery not loaded. Check your script.");
}

function scroller(){
	var scrollTop = $(window).scrollTop(); // Current scroll position
	var winHeight = $(window).height(); // Window (viewport) height
	var docHeight = $(document).height(); // Total document height
	var scrollPercent = (scrollTop) / (docHeight-winHeight); // % scrolled - as a number: 0–1
	var scrollPercentRounded = scrollPercent*100

    // console.log("Scroll percent:", scrollPercentRounded); // Debug percentage

	//$('.maintitle').text(scrollPercentRounded)

    // Apply parallax effects using CSS transformations
	$('#imache').css("transform","translate(-50%,"+((scrollPercentRounded*2)-50)+"%)");
	$('#text1').css("transform","translateY("+((scrollPercentRounded*2.5)-80)+"%)");
	$('#text2').css("transform","translateY("+((scrollPercentRounded*2.5)-200)+"%)");
	$('#text3').css("transform","translateY("+((scrollPercentRounded*2)-300)+"%)");
}

$(window).scroll(() => scroller()); // works for parallax effects on mobile and desktop (modern browsers like Chrome, Safari handle this fine).
$(window).resize(() => scroller()); // works for parallax effects on mobile and desktop (modern browsers like Chrome, Safari handle this fine).

// handling scroll-like behaviors (touch gestures) on mobile devices
$('body').on({
    'touchmove': function(e) { 
        e.preventDefault(); // Optionally prevent default scrolling behaviors
        scroller(); // Call the parallax handler
    }
});
/* Why Isn't touchmove Always Necessary? Modern mobile browsers like Chrome, 
   Safari, and Firefox handle traditional scroll events ($(window).scroll(...)) 
   very well, even for touchscreens. Unless you're doing something very specific 
   (e.g., custom scrolling or preventing native behaviors), scroll covers most cases.
   So, ypu can remove or combine like here.
*/