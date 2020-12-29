$( document ).ready(function() {
    $('#main_image').fadeIn(2000);
    $('#full-name').fadeIn(2000);

	$(document).scroll(function () {
		var $nav = $(".navbar-fixed-top");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});

	$('.carousel').carousel({
	        interval: 3000,
	});
});
