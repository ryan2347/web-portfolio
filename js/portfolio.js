$( document ).ready(function() {

    $('#main_image').fadeIn(2000);

	$(document).scroll(function () {
		var $nav = $(".navbar-fixed-top");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});

	$('.carousel').carousel({
	    interval: 3000,
	});

	const scrollToTopButton = document.getElementById('js-top');

	const scrollFunc = () => {
	  let y = window.scrollY;
	  if (y > 0) {
	    $('.top-link').show();
	  } else {
	    $('.top-link').hide();
	  }
	};
	
	window.addEventListener("scroll", scrollFunc);

	const scrollToTop = () => {
	  const c = document.documentElement.scrollTop || document.body.scrollTop;
	  if (c > 0) {
	    window.scrollTo({top: 0, behavior: 'smooth'});
	  }
	};

	scrollToTopButton.onclick = function(e) {
	  e.preventDefault();
	  scrollToTop();
	}
});

$(function () {
  $('.tlt').textillate({
    loop: true,
    in:{
      effect: 'flipInX'
    },
    out: {
      effect: 'fadeOut'
    }
  });
});
