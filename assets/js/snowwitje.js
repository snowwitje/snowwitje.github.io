/*global $, window, document */
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
	
	
	$window.on('load', function () {
		if ($body.hasClass('special')) {
			$('#header').removeClass('extended');
		} else {
			$('#header').addClass('extended');
		}
	});
	
	function menuScroll() {
		'use strict';

		$('.cat-menu li').on('click', function () {
			$('.cat-menu li').each(function (i, item) {
				$(item).removeClass('selected');
			});
			$(this).addClass('selected');

			var anchor = $(this).attr('data-link');

			if (document.getElementById(anchor)) {
				$([document.documentElement, document.body]).animate({
					scrollTop: $("#" + anchor).offset().top - 100
				}, 500);
			}

		});

		$(window).scroll(function () {
			var position = $(this).scrollTop();

			$('.content-samples').each(function () {
				var target = $(this).offset().top;
				var id = $(this).attr('id');

				if ((position + 200) >= (target)) {
					$('.cat-menu li').each(function (i, item) {
						$(item).removeClass('selected');
						if ($(item).attr('data-link') === id) {
							$(item).addClass('selected');
						}
					});
				}
			});
		});
	}
	
	menuScroll();
	
});