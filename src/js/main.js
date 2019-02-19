const $ = require('jquery');
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
	console.log($(this).attr('data-price'))
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

	$('.progressbar__amount').html(price + '$')
});



// dark mode 

var switcher = anime({
	targets: '.switcher',
	translateY: [15, 0],
	autoplay: false
})

$('.switcher').click(function(event) {
	switcher.play();
	$('.mode').toggleClass('--dark');
});
