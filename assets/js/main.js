const $ = require('jquery');
require('jquery-validation')($);
const anime = require('animejs');
const viewport = require('./viewport.js')
const onscroll = require('./scroll.js')
const AOS = require('aos');
const IMask = require('imask');
const anchors = require('./smooth-scroll.js')


AOS.init();

viewport()

//nav

$('.header__shower-btn').click(function(event) {
	$('.links__list').toggleClass('active');
});

// phone number input

var phoneInput = document.getElementById('phone');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
var mask = new IMask(phoneInput, maskOptions);



// cross rotate

let cross = document.getElementById('cross__img');
let crossRotation = anime({
	targets: cross,
	rotate: 90,
	easing: 'linear',
	loop: true,
	autoplay: false
})

$('#cross__img').hover(function() {
	crossRotation.play()
}, function() {
	crossRotation.pause()
});



// progressbar;

let sum = 0;
$('.checkbox-item').each(function(){
	sum += Number($(this).attr('data-price'))
});

$('.checkbox-item').click(function(event) {
	let price = 0;
	let checked = $('.checkbox-item').filter(function(index) {
		return $(this).is(':checked');
	});

	checked.each(function(){
		price += Number($(this).attr('data-price'));
	})

	let k = sum / price;
	let progress = 100 / k;

	$('.progressfill').css({
		left: progress.toString() + '%',
		transform: 'translateX(-' + progress.toString() + '%)'
	});

	$('.progressbar__totalamount').html(price)
});


// formsPush

$('.submit__btn').click(function(event) {
	event.preventDefault();

	let isInvalid = [];
	let items = '';
	let checked = $('.checkbox-item').filter(function(index) {
		return $(this).is(':checked');
	});
	if (checked) {
		checked.each(function(index, el) {
			items += `- ${$(el).siblings().text().toLowerCase()}; \x0A `;
		});
	}
	$('.inputs__input').each(function(index, el) {
		if ($(el).val() == '') {
			$(el).css('border', '1px solid red');
		} else {
			$(el).removeAttr('style');
		}
	});
	isInvalid = $('.inputs__input').filter(function(i, el) {
		return $(el).val() == ''
	});

	function submit() {
		$.post('/api/lead', {
			name: $('#user-name').val(),
			email: $('#user-email').val(),
			phone: $('#phone').val(),
			company: $('#company-name').val(),
			description: $('#description').val(),
			items: items,
			price: $('.progressbar__totalamount').text(),
		}, function(data, textStatus, xhr) {
			console.log(textStatus)
			alert('Отправлено');
			$('.form-input').each(function(index, el) {
				$(el).val('');
			});
			$('.checkbox-item').prop("checked", false);

		});
		$('.submit__btn').attr('disabled', 'true');
	}

	if (isInvalid.length === 0) {
		submit();
	}else {
		$(window).scrollTop($('#forms-block').offset().top)
	}
});


// dark mode

$('.switcher').click(function(event) {
	switcher.play();
	$('.mode').toggleClass('--dark');
});


const wobbleSwitcher = setInterval(()=> {
	wobble.play();
}, 8000)

const wobble = anime({
	targets: '.switcher',
	rotate: [6, '-4', 2, '-1', 1],
	duration: 1000,
	easing: 'linear',
	autoplay: false
})

const switcher = anime({
	targets: '.switcher',
	translateY: 15,
	duration: 200,
 	direction: 'alternate',
	autoplay: false
})

// pop up

const isVideoShowed = window.localStorage.getItem('isVideoShowed');
const video = document.getElementById('popup-video');

if (isVideoShowed) {
	$('.banner__popup').fadeOut(400);
	video.pause();
}else {
	$('body').css('overflow', 'hidden');
	$('.close-btn').hide().delay(4000).fadeIn(400);
	$('.close-btn').click(function(event) {
		$('body').removeAttr('style');
		$('.banner__popup').fadeOut(600);
		video.pause();
		window.localStorage.setItem('isVideoShowed', true);
	});
}

video.onended = function() {
	$('body').removeAttr('style');
	$('.banner__popup').fadeOut(600);
	window.localStorage.setItem('isVideoShowed', true);
}


// coockies alert

const isAlertShowed = window.localStorage.getItem('isAlertShowed');

if (!isAlertShowed) {
	window.localStorage.setItem('isAlertShowed', true);
	$('.coockies-alert').slideToggle(500);
	$('.close-coockies-alert-btn').click(function(event) {
		$('.coockies-alert').slideToggle(500);
	});
}
