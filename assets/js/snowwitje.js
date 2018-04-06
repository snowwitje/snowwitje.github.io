/*global $, jQuery*/
$(document).ready(function () {
	'use strict';
	var $window = $(window),
		$body = $('body');

	// Lightbox gallery.
	var $gallery = $('.gallery');
	if ($gallery.length) {
		$gallery.each(function (i, item) {
			$(item).poptrox({
				preload:   false,
				popupPadding: 15,
				caption: { selector: ".about", remove: true },
				usePopupCaption: true,
				usePopupNav: true,
				popupCaptionHeight: 80
			});
		});
	}
});