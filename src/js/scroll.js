let $topTitle = $(".summary__top-title");
let $midTitle = $('.summary__mid-title')
let $sculpture;
let $window = $(window);
let darkMode = $('.mode').is('.--dark');

$('.switcher').click(function() {
    darkMode = !darkMode;
    sculptureMode();
    $sculpture.all.removeAttr('style');
});


function sculptureMode() {
    if (darkMode) {
        $sculpture = {
            head: $('.sculpture-dark #head-dark'),
            torso: $('.sculpture-dark #torso-dark'),
            hips: $('.sculpture-dark #hips-dark'),
            legs: $('.sculpture-dark #legs-dark'),
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

function isSculptureIntoView(part){
    let docViewTop = $window.scrollTop();
    let docViewBottom = docViewTop + $window.height();
    let sculptureHeight = $('.sculpture').height();
    let sculptureTop = $('.sculpture').offset().top;
    let sculpturePart = sculptureHeight / 4;
    let elemBottom = sculptureTop + (sculpturePart * part);
    let elemTop = elemBottom - sculpturePart;
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
    if (isSculptureIntoView(1) && $sculpture.isClose) {
        $sculpture.head.find('.sculpture__description').css('opacity', 1);
        $sculpture.torso.css('transform', 'translate(79px, 218px)');
        $sculpture.hips.css('transform', 'translate(12px, 532px)');
        $sculpture.legs.css('transform', 'translate(0px, 906px)');
    }
    else if (isSculptureIntoView(2) && $sculpture.isClose) {
        $sculpture.torso.find('.sculpture__description').css('opacity', 1);
        $sculpture.hips.css('transform', 'translate(12px, 599px)');
        $sculpture.legs.css('transform', 'translate(0px, 974px)');
    }
    else if (isSculptureIntoView(3) && $sculpture.isClose) {
        $sculpture.hips.find('.sculpture__description').css('opacity', 1);
        $sculpture.legs.css('transform', 'translate(0px, 1025px)');
    }
    else if (isSculptureIntoView(4)) {
        $sculpture.isClose = false;
        $sculpture.legs.find('.sculpture__description').css('opacity', 1);
    }
});


module.exports = onScroll;