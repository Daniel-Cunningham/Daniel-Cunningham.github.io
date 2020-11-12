
// #################################################################
// ##### FUNCTIONS
// #################################################################
function scrollDistance() {
	return $(document).scrollTop();
}

function toggleHeaderClass(element) {
	scrollDistance();

	if (scrollDistance() > 50) {
		$(element).addClass('scrolled');
	} else {
		$(element).removeClass('scrolled');
	}

}


// #################################################################
// ##### MAIN CONTROL
// #################################################################
$(document).ready(function() {
	toggleHeaderClass("header");
});

$(document).on('scroll', function() {
	toggleHeaderClass("header");
});
