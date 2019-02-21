'use strict';

var $topTitle = $(".summary__top-title");
var $midTitle = $('.summary__mid-title');
var $sculpture = void 0;
var $window = $(window);
var darkMode = $('.mode').is('.--dark');

$('.switcher').click(function () {
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
            isClose: true
        };
    } else {
        $sculpture = {
            head: $('.sculpture #head'),
            torso: $('.sculpture #torso'),
            hips: $('.sculpture #hips'),
            legs: $('.sculpture #legs'),
            all: $('.sculpture .sctulpture__block'),
            parent: $('.sculpture #sculpture'),
            isClose: true
        };
    }
}

function isScrolledIntoView($elem) {
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();
    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();
    return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

sculptureMode();

var onScroll = $(document).on("scroll", function () {
    if (isScrolledIntoView($topTitle)) {
        $('.summary__top-title i').each(function (i, el) {
            setTimeout(function () {
                el.classList.add('fill');
            }, i * 200);
        });
    } else {
        $('.summary__top-title i').each(function (i, el) {
            setTimeout(function () {
                el.classList.remove('fill');
            }, i * 200);
        });
    };
    if (isScrolledIntoView($midTitle)) {
        $midTitle.addClass('active');
    } else {
        $midTitle.removeClass('active');
    };
    if (isScrolledIntoView($sculpture.head) && $sculpture.isClose) {
        $sculpture.head.find('.sculpture__description').css('opacity', 1);
        $sculpture.torso.attr('transform', 'translate(79, 218)');
        $sculpture.hips.attr('transform', 'translate(12, 532)');
        $sculpture.legs.attr('transform', 'translate(0, 906)');
    } else if (isScrolledIntoView($sculpture.torso) && $sculpture.isClose) {
        $sculpture.torso.find('.sculpture__description').css('opacity', 1);
        $sculpture.hips.attr('transform', 'translate(12, 599)');
        $sculpture.legs.attr('transform', 'translate(0, 974)');
    } else if (isScrolledIntoView($sculpture.hips) && $sculpture.isClose) {
        $sculpture.hips.find('.sculpture__description').css('opacity', 1);
        $sculpture.legs.attr('transform', 'translate(0, 1025)');
    } else if (isScrolledIntoView($sculpture.legs)) {
        $sculpture.isClose = false;
        $sculpture.legs.find('.sculpture__description').css('opacity', 1);
    }
});

module.exports = onScroll;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbC5qcyJdLCJuYW1lcyI6WyIkdG9wVGl0bGUiLCIkIiwiJG1pZFRpdGxlIiwiJHNjdWxwdHVyZSIsIiR3aW5kb3ciLCJ3aW5kb3ciLCJkYXJrTW9kZSIsImlzIiwiY2xpY2siLCJzY3VscHR1cmVNb2RlIiwiaGVhZCIsInRvcnNvIiwiaGlwcyIsImxlZ3MiLCJhbGwiLCJwYXJlbnQiLCJpc0Nsb3NlIiwiaXNTY3JvbGxlZEludG9WaWV3IiwiJGVsZW0iLCJkb2NWaWV3VG9wIiwic2Nyb2xsVG9wIiwiZG9jVmlld0JvdHRvbSIsImhlaWdodCIsImVsZW1Ub3AiLCJvZmZzZXQiLCJ0b3AiLCJlbGVtQm90dG9tIiwib25TY3JvbGwiLCJkb2N1bWVudCIsIm9uIiwiZWFjaCIsImkiLCJlbCIsInNldFRpbWVvdXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZmluZCIsImNzcyIsImF0dHIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFlBQVlDLEVBQUUscUJBQUYsQ0FBaEI7QUFDQSxJQUFJQyxZQUFZRCxFQUFFLHFCQUFGLENBQWhCO0FBQ0EsSUFBSUUsbUJBQUo7QUFDQSxJQUFJQyxVQUFVSCxFQUFFSSxNQUFGLENBQWQ7QUFDQSxJQUFJQyxXQUFXTCxFQUFFLE9BQUYsRUFBV00sRUFBWCxDQUFjLFNBQWQsQ0FBZjs7QUFFQU4sRUFBRSxXQUFGLEVBQWVPLEtBQWYsQ0FBcUIsWUFBVztBQUM1QkYsZUFBVyxDQUFDQSxRQUFaO0FBQ0FHO0FBQ0gsQ0FIRDs7QUFNQSxTQUFTQSxhQUFULEdBQXlCO0FBQ3JCLFFBQUlILFFBQUosRUFBYztBQUNWSCxxQkFBYTtBQUNUTyxrQkFBTVQsRUFBRSx1QkFBRixDQURHO0FBRVRVLG1CQUFPVixFQUFFLHdCQUFGLENBRkU7QUFHVFcsa0JBQU1YLEVBQUUsdUJBQUYsQ0FIRztBQUlUWSxrQkFBTVosRUFBRSx1QkFBRixDQUpH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LElBQWhCLENBQXFCLHlCQUFyQixFQUFnREMsR0FBaEQsQ0FBb0QsU0FBcEQsRUFBK0QsQ0FBL0Q7QUFDQXJDLG1CQUFXVSxJQUFYLENBQWdCNEIsSUFBaEIsQ0FBcUIsV0FBckIsRUFBa0Msb0JBQWxDO0FBQ0gsS0FISSxNQUlBLElBQUl4QixtQkFBbUJkLFdBQVdVLElBQTlCLENBQUosRUFBeUM7QUFDMUNWLG1CQUFXYSxPQUFYLEdBQXFCLEtBQXJCO0FBQ0FiLG1CQUFXVSxJQUFYLENBQWdCMEIsSUFBaEIsQ0FBcUIseUJBQXJCLEVBQWdEQyxHQUFoRCxDQUFvRCxTQUFwRCxFQUErRCxDQUEvRDtBQUNIO0FBQ0osQ0F0Q2MsQ0FBZjs7QUF5Q0FFLE9BQU9DLE9BQVAsR0FBaUJoQixRQUFqQiIsImZpbGUiOiJzY3JvbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgJHRvcFRpdGxlID0gJChcIi5zdW1tYXJ5X190b3AtdGl0bGVcIik7XG5sZXQgJG1pZFRpdGxlID0gJCgnLnN1bW1hcnlfX21pZC10aXRsZScpXG5sZXQgJHNjdWxwdHVyZTtcbmxldCAkd2luZG93ID0gJCh3aW5kb3cpO1xubGV0IGRhcmtNb2RlID0gJCgnLm1vZGUnKS5pcygnLi0tZGFyaycpO1xuXG4kKCcuc3dpdGNoZXInKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICBkYXJrTW9kZSA9ICFkYXJrTW9kZTtcbiAgICBzY3VscHR1cmVNb2RlKCk7XG59KTtcblxuXG5mdW5jdGlvbiBzY3VscHR1cmVNb2RlKCkge1xuICAgIGlmIChkYXJrTW9kZSkge1xuICAgICAgICAkc2N1bHB0dXJlID0ge1xuICAgICAgICAgICAgaGVhZDogJCgnLnNjdWxwdHVyZS1kYXJrICNoZWFkJyksXG4gICAgICAgICAgICB0b3JzbzogJCgnLnNjdWxwdHVyZS1kYXJrICN0b3JzbycpLFxuICAgICAgICAgICAgaGlwczogJCgnLnNjdWxwdHVyZS1kYXJrICNoaXBzJyksXG4gICAgICAgICAgICBsZWdzOiAkKCcuc2N1bHB0dXJlLWRhcmsgI2xlZ3MnKSxcbiAgICAgICAgICAgIGFsbDogJCgnLnNjdWxwdHVyZS1kYXJrIC5zY3R1bHB0dXJlX19ibG9jaycpLFxuICAgICAgICAgICAgcGFyZW50OiAkKCcuc2N1bHB0dXJlLWRhcmsgI3NjdWxwdHVyZScpLFxuICAgICAgICAgICAgaXNDbG9zZTogdHJ1ZSxcbiAgICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgICAkc2N1bHB0dXJlID0ge1xuICAgICAgICAgICAgaGVhZDogJCgnLnNjdWxwdHVyZSAjaGVhZCcpLFxuICAgICAgICAgICAgdG9yc286ICQoJy5zY3VscHR1cmUgI3RvcnNvJyksXG4gICAgICAgICAgICBoaXBzOiAkKCcuc2N1bHB0dXJlICNoaXBzJyksXG4gICAgICAgICAgICBsZWdzOiAkKCcuc2N1bHB0dXJlICNsZWdzJyksXG4gICAgICAgICAgICBhbGw6ICQoJy5zY3VscHR1cmUgLnNjdHVscHR1cmVfX2Jsb2NrJyksXG4gICAgICAgICAgICBwYXJlbnQ6ICQoJy5zY3VscHR1cmUgI3NjdWxwdHVyZScpLFxuICAgICAgICAgICAgaXNDbG9zZTogdHJ1ZSxcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNTY3JvbGxlZEludG9WaWV3KCRlbGVtKSB7XG4gICAgbGV0IGRvY1ZpZXdUb3AgPSAkd2luZG93LnNjcm9sbFRvcCgpO1xuICAgIGxldCBkb2NWaWV3Qm90dG9tID0gZG9jVmlld1RvcCArICR3aW5kb3cuaGVpZ2h0KCk7XG4gICAgbGV0IGVsZW1Ub3AgPSAkZWxlbS5vZmZzZXQoKS50b3A7XG4gICAgbGV0IGVsZW1Cb3R0b20gPSBlbGVtVG9wICsgJGVsZW0uaGVpZ2h0KCk7XG4gICAgcmV0dXJuICgoZWxlbUJvdHRvbSA8PSBkb2NWaWV3Qm90dG9tKSAmJiAoZWxlbVRvcCA+PSBkb2NWaWV3VG9wKSk7XG59XG5cbnNjdWxwdHVyZU1vZGUoKTtcblxubGV0IG9uU2Nyb2xsID0gJChkb2N1bWVudCkub24oXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChpc1Njcm9sbGVkSW50b1ZpZXcoJHRvcFRpdGxlKSkge1xuICAgIFx0JCgnLnN1bW1hcnlfX3RvcC10aXRsZSBpJykuZWFjaChmdW5jdGlvbihpLCBlbCl7XG4gICAgXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICBcdFx0XHRlbC5jbGFzc0xpc3QuYWRkKCdmaWxsJylcbiAgICBcdFx0fSwgaSAqIDIwMClcbiAgICBcdH0pXG4gICAgfWVsc2V7XG4gICAgICAgICQoJy5zdW1tYXJ5X190b3AtdGl0bGUgaScpLmVhY2goZnVuY3Rpb24oaSwgZWwpe1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbGwnKVxuICAgICAgICAgICAgfSwgaSAqIDIwMClcbiAgICAgICAgfSlcbiAgICB9O1xuICAgIGlmIChpc1Njcm9sbGVkSW50b1ZpZXcoJG1pZFRpdGxlKSkge1xuICAgIFx0JG1pZFRpdGxlLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgIH1lbHNle1xuICAgICAgICAkbWlkVGl0bGUucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgfTtcbiAgICBpZiAoaXNTY3JvbGxlZEludG9WaWV3KCRzY3VscHR1cmUuaGVhZCkgJiYgJHNjdWxwdHVyZS5pc0Nsb3NlKSB7XG4gICAgICAgICRzY3VscHR1cmUuaGVhZC5maW5kKCcuc2N1bHB0dXJlX19kZXNjcmlwdGlvbicpLmNzcygnb3BhY2l0eScsIDEpO1xuICAgICAgICAkc2N1bHB0dXJlLnRvcnNvLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoNzksIDIxOCknKTtcbiAgICAgICAgJHNjdWxwdHVyZS5oaXBzLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMTIsIDUzMiknKTtcbiAgICAgICAgJHNjdWxwdHVyZS5sZWdzLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwgOTA2KScpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc1Njcm9sbGVkSW50b1ZpZXcoJHNjdWxwdHVyZS50b3JzbykgJiYgJHNjdWxwdHVyZS5pc0Nsb3NlKSB7XG4gICAgICAgICRzY3VscHR1cmUudG9yc28uZmluZCgnLnNjdWxwdHVyZV9fZGVzY3JpcHRpb24nKS5jc3MoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgJHNjdWxwdHVyZS5oaXBzLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMTIsIDU5OSknKTtcbiAgICAgICAgJHNjdWxwdHVyZS5sZWdzLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwgOTc0KScpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc1Njcm9sbGVkSW50b1ZpZXcoJHNjdWxwdHVyZS5oaXBzKSAmJiAkc2N1bHB0dXJlLmlzQ2xvc2UpIHtcbiAgICAgICAgJHNjdWxwdHVyZS5oaXBzLmZpbmQoJy5zY3VscHR1cmVfX2Rlc2NyaXB0aW9uJykuY3NzKCdvcGFjaXR5JywgMSk7XG4gICAgICAgICRzY3VscHR1cmUubGVncy5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsIDEwMjUpJyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzU2Nyb2xsZWRJbnRvVmlldygkc2N1bHB0dXJlLmxlZ3MpKSB7XG4gICAgICAgICRzY3VscHR1cmUuaXNDbG9zZSA9IGZhbHNlO1xuICAgICAgICAkc2N1bHB0dXJlLmxlZ3MuZmluZCgnLnNjdWxwdHVyZV9fZGVzY3JpcHRpb24nKS5jc3MoJ29wYWNpdHknLCAxKTtcbiAgICB9XG59KTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IG9uU2Nyb2xsOyJdfQ==
