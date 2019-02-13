const $ = require('jquery');
const anime = require('animejs');
const сanvas = require('./canvas.js');
const head = require('./head.js');
const onscroll = require('./scroll.js')
const AOS = require('aos');
const IMask = require('imask');


AOS.init();

$('#summary__bg').attr({
	height: window.innerHeight,
});


const vw = $(window).width();

if (vw <= 1440 && vw > 475) {
	$('#canvas').attr('height', 400);

	let headBg = сanvas('canvas', 50);
	let summaryBg = сanvas('summary__bg', 200, '#d3d3d3', 2, 0.2);


}else if (vw <= 475) {
	
	$('#canvas').attr('height', 400);

	let headBg = сanvas('canvas', 25);
	let summaryBg = сanvas('summary__bg', 50, '#d3d3d3', 2, 0.2);
}





head();

var phoneInput = document.getElementById('phone');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
var mask = new IMask(phoneInput, maskOptions);



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