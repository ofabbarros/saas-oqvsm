/* ------ Backstretch Backgrounds ------ */

$(function() {
  $.backstretch([
      "assets/images/background-1.png"
    , "assets/images/background-2.png"
    , "assets/images/background-3.png"
  ], {duration: 3000, fade: 750});
});

// Fancybox.js
$('.fancybox-media')
	.attr('rel', 'media-gallery')
	.fancybox({
	openEffect : 'none',
	closeEffect : 'none',
	prevEffect : 'none',
	nextEffect : 'none',

	arrows : false,
	helpers : {
		media : {},
		buttons : {}
	}
});