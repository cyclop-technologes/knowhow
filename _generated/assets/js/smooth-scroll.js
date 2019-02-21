'use strict';

module.exports = $('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]').not('[href="#0"]').click(function (event) {
  // On-page links
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function () {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) {
          // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtb290aC1zY3JvbGwuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIiQiLCJub3QiLCJjbGljayIsImV2ZW50IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInJlcGxhY2UiLCJob3N0bmFtZSIsInRhcmdldCIsImhhc2giLCJsZW5ndGgiLCJzbGljZSIsInByZXZlbnREZWZhdWx0IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsIiR0YXJnZXQiLCJmb2N1cyIsImlzIiwiYXR0ciJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBT0MsT0FBUCxHQUFpQkMsRUFBRSxjQUFGO0FBQ2Y7QUFEZSxDQUVkQyxHQUZjLENBRVYsWUFGVSxFQUdkQSxHQUhjLENBR1YsYUFIVSxFQUlkQyxLQUpjLENBSVIsVUFBU0MsS0FBVCxFQUFnQjtBQUNyQjtBQUNBLE1BQ0VDLFNBQVNDLFFBQVQsQ0FBa0JDLE9BQWxCLENBQTBCLEtBQTFCLEVBQWlDLEVBQWpDLEtBQXdDLEtBQUtELFFBQUwsQ0FBY0MsT0FBZCxDQUFzQixLQUF0QixFQUE2QixFQUE3QixDQUF4QyxJQUVBRixTQUFTRyxRQUFULElBQXFCLEtBQUtBLFFBSDVCLEVBSUU7QUFDQTtBQUNBLFFBQUlDLFNBQVNSLEVBQUUsS0FBS1MsSUFBUCxDQUFiO0FBQ0FELGFBQVNBLE9BQU9FLE1BQVAsR0FBZ0JGLE1BQWhCLEdBQXlCUixFQUFFLFdBQVcsS0FBS1MsSUFBTCxDQUFVRSxLQUFWLENBQWdCLENBQWhCLENBQVgsR0FBZ0MsR0FBbEMsQ0FBbEM7QUFDQTtBQUNBLFFBQUlILE9BQU9FLE1BQVgsRUFBbUI7QUFDakI7QUFDQVAsWUFBTVMsY0FBTjtBQUNBWixRQUFFLFlBQUYsRUFBZ0JhLE9BQWhCLENBQXdCO0FBQ3RCQyxtQkFBV04sT0FBT08sTUFBUCxHQUFnQkM7QUFETCxPQUF4QixFQUVHLElBRkgsRUFFUyxZQUFXO0FBQ2xCO0FBQ0E7QUFDQSxZQUFJQyxVQUFVakIsRUFBRVEsTUFBRixDQUFkO0FBQ0FTLGdCQUFRQyxLQUFSO0FBQ0EsWUFBSUQsUUFBUUUsRUFBUixDQUFXLFFBQVgsQ0FBSixFQUEwQjtBQUFFO0FBQzFCLGlCQUFPLEtBQVA7QUFDRCxTQUZELE1BRU87QUFDTEYsa0JBQVFHLElBQVIsQ0FBYSxVQUFiLEVBQXdCLElBQXhCLEVBREssQ0FDMEI7QUFDL0JILGtCQUFRQyxLQUFSLEdBRkssQ0FFWTtBQUNsQjtBQUNGLE9BYkQ7QUFjRDtBQUNGO0FBQ0YsQ0FsQ2MsQ0FBakIiLCJmaWxlIjoic21vb3RoLXNjcm9sbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gJCgnYVtocmVmKj1cIiNcIl0nKVxuICAvLyBSZW1vdmUgbGlua3MgdGhhdCBkb24ndCBhY3R1YWxseSBsaW5rIHRvIGFueXRoaW5nXG4gIC5ub3QoJ1tocmVmPVwiI1wiXScpXG4gIC5ub3QoJ1tocmVmPVwiIzBcIl0nKVxuICAuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvLyBPbi1wYWdlIGxpbmtzXG4gICAgaWYgKFxuICAgICAgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgXG4gICAgICAmJiBcbiAgICAgIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWVcbiAgICApIHtcbiAgICAgIC8vIEZpZ3VyZSBvdXQgZWxlbWVudCB0byBzY3JvbGwgdG9cbiAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XG4gICAgICB0YXJnZXQgPSB0YXJnZXQubGVuZ3RoID8gdGFyZ2V0IDogJCgnW25hbWU9JyArIHRoaXMuaGFzaC5zbGljZSgxKSArICddJyk7XG4gICAgICAvLyBEb2VzIGEgc2Nyb2xsIHRhcmdldCBleGlzdD9cbiAgICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XG4gICAgICAgIC8vIE9ubHkgcHJldmVudCBkZWZhdWx0IGlmIGFuaW1hdGlvbiBpcyBhY3R1YWxseSBnb25uYSBoYXBwZW5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcFxuICAgICAgICB9LCAxMDAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBDYWxsYmFjayBhZnRlciBhbmltYXRpb25cbiAgICAgICAgICAvLyBNdXN0IGNoYW5nZSBmb2N1cyFcbiAgICAgICAgICB2YXIgJHRhcmdldCA9ICQodGFyZ2V0KTtcbiAgICAgICAgICAkdGFyZ2V0LmZvY3VzKCk7XG4gICAgICAgICAgaWYgKCR0YXJnZXQuaXMoXCI6Zm9jdXNcIikpIHsgLy8gQ2hlY2tpbmcgaWYgdGhlIHRhcmdldCB3YXMgZm9jdXNlZFxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkdGFyZ2V0LmF0dHIoJ3RhYmluZGV4JywnLTEnKTsgLy8gQWRkaW5nIHRhYmluZGV4IGZvciBlbGVtZW50cyBub3QgZm9jdXNhYmxlXG4gICAgICAgICAgICAkdGFyZ2V0LmZvY3VzKCk7IC8vIFNldCBmb2N1cyBhZ2FpblxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7Il19
