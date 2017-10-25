$(function(){
	$('.header .menu-button').click(function() {
		$('.top-menu').removeClass('hidden');
	});
	$('.index-page-slider').slick({
		autoplay: true,
		dots: true
	});
});