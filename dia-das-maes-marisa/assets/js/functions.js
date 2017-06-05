$(document).ready(function() {

	var isMobile = {
	    Android: function() {
	        return navigator.userAgent.match(/Android/i);
	    },
	    BlackBerry: function() {
	        return navigator.userAgent.match(/BlackBerry/i);
	    },
	    iOS: function() {
	        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	    },
	    Opera: function() {
	        return navigator.userAgent.match(/Opera Mini/i);
	    },
	    Windows: function() {
	        return navigator.userAgent.match(/IEMobile/i);
	    },
	    any: function() {
	        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	    }
	};

	//Init do plugin parallax
	if (!isMobile.any()) {
		$(window).stellar({
			horizontalScrolling: false,
			responsive: true
		});
	}
	
	
	$(window).scroll(function() {
		var altura = $(document).scrollTop();
		var home = $('#home').offset().top;
		var cat01 = $('#cat-01').offset().top;
		var cat02 = $('#cat-02').offset().top;
		var cat03 = $('#cat-03').offset().top;
		var cat04 = $('#cat-04').offset().top;
		var cat05 = $('#cat-05').offset().top;
		var cat06 = $('#cat-06').offset().top;
		var cat07 = $('#cat-07').offset().top;
		var cat08 = $('#cat-08').offset().top;
		var end = $('#end').offset().top;
		
		// Ativa o item de sub-menu correspondente ao vídeo de acordo com o scroll
		if (altura >= home && altura < cat01) {
			$('.it-home').addClass('active');
		} else {
			$('.it-home').removeClass('active');
		}
		if (altura >= cat01 && altura < cat02) {
			$('.it-01').addClass('active');
		} else {
			$('.it-01').removeClass('active');
		}

		if (altura >= cat02 && altura < cat03) {
			$('.it-02').addClass('active');
		} else {
			$('.it-02').removeClass('active');
		}

		if (altura >= cat03 && altura < cat04) {
			$('.it-03').addClass('active');
		} else {
			$('.it-03').removeClass('active');
		}

		if (altura >= cat04 && altura < cat05) {
			$('.it-04').addClass('active');
		} else {
			$('.it-04').removeClass('active');
		}

		if (altura >= cat05 && altura < cat06) {
			$('.it-05').addClass('active');
		} else {
			$('.it-05').removeClass('active');
		}

		if (altura >= cat06 && altura < cat07) {
			$('.it-06').addClass('active');
		} else {
			$('.it-06').removeClass('active');
		}

		if (altura >= cat07 && altura < cat08) {
			$('.it-07').addClass('active');
		} else {
			$('.it-07').removeClass('active');
		}

		if (altura >= cat08 && altura < end) {
			$('.it-08').addClass('active');
		} else {
			$('.it-08').removeClass('active');
		}

		if (altura >= end) {
			$('.it-end').addClass('active');
		} else {
			$('.it-end').removeClass('active');
		}

	});

	// Animação do scroll da tela
	$('.it-home').click(function(event){
		event.preventDefault();
		$('html, body').animate({
		    scrollTop: $('#home').offset().top
		}, 1000);
	});

	$('.it-01, #home a').click(function(event){
		event.preventDefault();
		$('html, body').animate({
		    scrollTop: $('#cat-01').offset().top
		}, 1000);
	});

	$('.it-02').click(function(event){
		event.preventDefault();
		$('html, body').animate({
		    scrollTop: $('#cat-02').offset().top
		}, 1000);
	});

	$('.it-03').click(function(event){
		event.preventDefault();
		$('html, body').animate({
		    scrollTop: $('#cat-03').offset().top
		}, 1000);
	});

	$('.it-04').click(function(event){
		event.preventDefault();
		$('html, body').animate({
		    scrollTop: $('#cat-04').offset().top
		}, 1000);
	});

	$('.it-05').click(function(event){
		event.preventDefault();
		$('html, body').animate({
		    scrollTop: $('#cat-05').offset().top
		}, 1000);
	});

	$('.it-06').click(function(event){
		event.preventDefault();
		$('html, body').animate({
		    scrollTop: $('#cat-06').offset().top
		}, 1000);
	});

	$('.it-07').click(function(event){
		event.preventDefault();
		$('html, body').animate({
		    scrollTop: $('#cat-07').offset().top
		}, 1000);
	});

	$('.it-08').click(function(event){
		event.preventDefault();
		$('html, body').animate({
		    scrollTop: $('#cat-08').offset().top
		}, 1000);
	});

	$('.it-end').click(function(event){
		event.preventDefault();
		$('html, body').animate({
		    scrollTop: $('#end').offset().top
		}, 1000);
	});
});