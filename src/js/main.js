const сanvas = require('./canvas.js');
const head = require('./head.js');
const anime = require('animejs');
const $ = require('jquery');
const AOS = require('aos');
const IMask = require('imask');


AOS.init();

$('#summary__bg').attr({
	height: window.innerHeight,
});

const headBg = сanvas('canvas', 50);
const summaryBg = сanvas('summary__bg', 200, '#d3d3d3', 2, 0.2);
head();


let $window = $(window);
let $elem = $(".summary__top-title");


var phoneInput = document.getElementById('phone');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
var mask = new IMask(phoneInput, maskOptions);



function isScrolledIntoView($elem, $window) {
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}


$(document).on("scroll", function () {
    if (isScrolledIntoView($elem, $window)) {

    	$('.summary__top-title i').each(function(i, el){

    		setTimeout(function(){
    			el.classList.add('fill')
    		}, i * 200)
    	})
    }
});

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