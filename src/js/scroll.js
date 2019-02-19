let $topTitle = $(".summary__top-title");
let $midTitle = $('.summary__mid-title')
let $sculpture;
let $window = $(window);
let darkMode = $('.mode').is('.--dark');

$('.switcher').click(function() {
    darkMode = !darkMode;
    sculptureMode();
});


function sculptureMode() {
    if (darkMode) {
        $sculpture = {
            head: $('.sculpture-dark #head'),
            torso: $('.sculpture-dark #torso'),
            hips: $('.sculpture-dark #hips'),
            legs: $('.sculpture-dark #legs'),
            all: $('.sculpture-dark .sctulpture__block'),
            parent: $('.sculpture-dark #sculpture'),
            isClose: true,
        }
    }else{
        $sculpture = {
            head: $('.sculpture #head'),
            torso: $('.sculpture #torso'),
            hips: $('.sculpture #hips'),
            legs: $('.sculpture #legs'),
            all: $('.sculpture .sctulpture__block'),
            parent: $('.sculpture #sculpture'),
            isClose: true,
        }
    }
}

function isScrolledIntoView($elem) {
    let docViewTop = $window.scrollTop();
    let docViewBottom = docViewTop + $window.height();
    let elemTop = $elem.offset().top;
    let elemBottom = elemTop + $elem.height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

sculptureMode();

let onScroll = $(document).on("scroll", function () {
    if (isScrolledIntoView($topTitle)) {
    	$('.summary__top-title i').each(function(i, el){
    		setTimeout(function(){
    			el.classList.add('fill')
    		}, i * 200)
    	})
    }else{
        $('.summary__top-title i').each(function(i, el){
            setTimeout(function(){
                el.classList.remove('fill')
            }, i * 200)
        })
    };
    if (isScrolledIntoView($midTitle)) {
    	$midTitle.addClass('active')
    }else{
        $midTitle.removeClass('active')
    };
    if (isScrolledIntoView($sculpture.head) && $sculpture.isClose) {
        $sculpture.head.find('.sculpture__description').css('opacity', 1);
        $sculpture.torso.attr('transform', 'translate(79, 218)');
        $sculpture.hips.attr('transform', 'translate(12, 532)');
        $sculpture.legs.attr('transform', 'translate(0, 906)');
    }
    else if (isScrolledIntoView($sculpture.torso) && $sculpture.isClose) {
        $sculpture.torso.find('.sculpture__description').css('opacity', 1);
        $sculpture.hips.attr('transform', 'translate(12, 599)');
        $sculpture.legs.attr('transform', 'translate(0, 974)');
    }
    else if (isScrolledIntoView($sculpture.hips) && $sculpture.isClose) {
        $sculpture.hips.find('.sculpture__description').css('opacity', 1);
        $sculpture.legs.attr('transform', 'translate(0, 1025)');
    }
    else if (isScrolledIntoView($sculpture.legs)) {
        $sculpture.isClose = false;
        $sculpture.legs.find('.sculpture__description').css('opacity', 1);
    }
});


module.exports = onScroll;