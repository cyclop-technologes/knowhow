const anime = require('animejs');


let $topTitle = $(".summary__top-title");
let $midTitle = $('.summary__mid-title')

let $sculpture = {
    head: $('#head'),
    torso: $('#torso'),
    hips: $('#hips'),
    legs: $('#legs'),
    all: $('.sctulpture__block')
}

function isScrolledIntoView($elem) {
    let $window = $(window);
    let docViewTop = $window.scrollTop();
    let docViewBottom = docViewTop + $window.height();

    let elemTop = $elem.offset().top;
    let elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}


let onScroll = $(document).on("scroll", function () {
    if (isScrolledIntoView($topTitle)) {

    	$('.summary__top-title i').each(function(i, el){

    		setTimeout(function(){
    			el.classList.add('fill')
    		}, i * 200)
    	})
    }
    else if (isScrolledIntoView($midTitle)) {
        console.log(isScrolledIntoView($midTitle));
    	$midTitle.addClass('active')
    }
    else if (isScrolledIntoView($sculpture.head)) {
        $sculpture.head.find('.sculpture__description').css('opacity', 1);
        $sculpture.torso.attr('transform', 'translate(79, 218)');
        $sculpture.hips.attr('transform', 'translate(12, 532)');
        $sculpture.legs.attr('transform', 'translate(0, 906)');
    }
    else if (isScrolledIntoView($sculpture.torso)) {
        $sculpture.torso.find('.sculpture__description').css('opacity', 1);
        $sculpture.hips.attr('transform', 'translate(12, 599)');
        $sculpture.legs.attr('transform', 'translate(0, 974)');
    }
    else if (isScrolledIntoView($sculpture.hips)) {
        $sculpture.hips.find('.sculpture__description').css('opacity', 1);
        $sculpture.legs.attr('transform', 'translate(0, 1025)');
    }
    else if (isScrolledIntoView($sculpture.legs)) {
        $sculpture.legs.find('.sculpture__description').css('opacity', 1);
    }
});


module.exports = onScroll;