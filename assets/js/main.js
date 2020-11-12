
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

function toggleMobileNavigation() {
	$(".navicon").on('click', function() {
		$(".mobile-navigation").addClass('open');
	});

	$(".closeicon").on('click', function() {
		$(".mobile-navigation").removeClass('open');
	})
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

toggleMobileNavigation();
