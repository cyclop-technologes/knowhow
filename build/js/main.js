var canvas = document.getElementById("canvas"),
  ctx = canvas.getContext('2d');

canvas.width = document.getElementById('canvas').offsetWidth;
canvas.height = document.getElementById('canvas').offsetHeight;

var stars = [], // Array that contains the stars
  FPS = 60, // Frames per second
  x = 50, // Number of stars
  mouse = {
    x: 0,
    y: 0
  }; // mouse location

// Push stars to array

for (var i = 0; i < x; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1 + 1,
    vx: Math.floor(Math.random() * 50) - 25,
    vy: Math.floor(Math.random() * 50) - 25
  });
}

// Draw the scene

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.globalCompositeOperation = "lighter";

  for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];

    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = 'black';
    ctx.stroke();
  }

  ctx.beginPath();
  for (var i = 0, x = stars.length; i < x; i++) {
    var starI = stars[i];
    ctx.moveTo(starI.x, starI.y);
    if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
    for (var j = 0, x = stars.length; j < x; j++) {
      var starII = stars[j];
      if (distance(starI, starII) < 150) {
        //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
        ctx.lineTo(starII.x, starII.y);
      }
    }
  }
  ctx.lineWidth = 0.05;
  ctx.strokeStyle = 'black';
  ctx.stroke();
}

function distance(point1, point2) {
  var xs = 0;
  var ys = 0;

  xs = point2.x - point1.x;
  xs = xs * xs;

  ys = point2.y - point1.y;
  ys = ys * ys;

  return Math.sqrt(xs + ys);
}

// Update star locations

function update() {
  for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];

    s.x += s.vx / FPS;
    s.y += s.vy / FPS;

    if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
    if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
  }
}

canvas.addEventListener('mousemove', function(e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// Update and draw

function tick() {
  draw();
  update();
  requestAnimationFrame(tick);
}

tick();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKSxcbiAgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbmNhbnZhcy53aWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKS5vZmZzZXRXaWR0aDtcbmNhbnZhcy5oZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJykub2Zmc2V0SGVpZ2h0O1xuXG52YXIgc3RhcnMgPSBbXSwgLy8gQXJyYXkgdGhhdCBjb250YWlucyB0aGUgc3RhcnNcbiAgRlBTID0gNjAsIC8vIEZyYW1lcyBwZXIgc2Vjb25kXG4gIHggPSA1MCwgLy8gTnVtYmVyIG9mIHN0YXJzXG4gIG1vdXNlID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9OyAvLyBtb3VzZSBsb2NhdGlvblxuXG4vLyBQdXNoIHN0YXJzIHRvIGFycmF5XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgeDsgaSsrKSB7XG4gIHN0YXJzLnB1c2goe1xuICAgIHg6IE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGgsXG4gICAgeTogTWF0aC5yYW5kb20oKSAqIGNhbnZhcy5oZWlnaHQsXG4gICAgcmFkaXVzOiBNYXRoLnJhbmRvbSgpICogMSArIDEsXG4gICAgdng6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUwKSAtIDI1LFxuICAgIHZ5OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1MCkgLSAyNVxuICB9KTtcbn1cblxuLy8gRHJhdyB0aGUgc2NlbmVcblxuZnVuY3Rpb24gZHJhdygpIHtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcImxpZ2h0ZXJcIjtcblxuICBmb3IgKHZhciBpID0gMCwgeCA9IHN0YXJzLmxlbmd0aDsgaSA8IHg7IGkrKykge1xuICAgIHZhciBzID0gc3RhcnNbaV07XG5cbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMocy54LCBzLnksIHMucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cblxuICBjdHguYmVnaW5QYXRoKCk7XG4gIGZvciAodmFyIGkgPSAwLCB4ID0gc3RhcnMubGVuZ3RoOyBpIDwgeDsgaSsrKSB7XG4gICAgdmFyIHN0YXJJID0gc3RhcnNbaV07XG4gICAgY3R4Lm1vdmVUbyhzdGFySS54LCBzdGFySS55KTtcbiAgICBpZiAoZGlzdGFuY2UobW91c2UsIHN0YXJJKSA8IDE1MCkgY3R4LmxpbmVUbyhtb3VzZS54LCBtb3VzZS55KTtcbiAgICBmb3IgKHZhciBqID0gMCwgeCA9IHN0YXJzLmxlbmd0aDsgaiA8IHg7IGorKykge1xuICAgICAgdmFyIHN0YXJJSSA9IHN0YXJzW2pdO1xuICAgICAgaWYgKGRpc3RhbmNlKHN0YXJJLCBzdGFySUkpIDwgMTUwKSB7XG4gICAgICAgIC8vY3R4Lmdsb2JhbEFscGhhID0gKDEgLyAxNTAgKiBkaXN0YW5jZShzdGFySSwgc3RhcklJKS50b0ZpeGVkKDEpKTtcbiAgICAgICAgY3R4LmxpbmVUbyhzdGFySUkueCwgc3RhcklJLnkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjdHgubGluZVdpZHRoID0gMC4wNTtcbiAgY3R4LnN0cm9rZVN0eWxlID0gJ2JsYWNrJztcbiAgY3R4LnN0cm9rZSgpO1xufVxuXG5mdW5jdGlvbiBkaXN0YW5jZShwb2ludDEsIHBvaW50Mikge1xuICB2YXIgeHMgPSAwO1xuICB2YXIgeXMgPSAwO1xuXG4gIHhzID0gcG9pbnQyLnggLSBwb2ludDEueDtcbiAgeHMgPSB4cyAqIHhzO1xuXG4gIHlzID0gcG9pbnQyLnkgLSBwb2ludDEueTtcbiAgeXMgPSB5cyAqIHlzO1xuXG4gIHJldHVybiBNYXRoLnNxcnQoeHMgKyB5cyk7XG59XG5cbi8vIFVwZGF0ZSBzdGFyIGxvY2F0aW9uc1xuXG5mdW5jdGlvbiB1cGRhdGUoKSB7XG4gIGZvciAodmFyIGkgPSAwLCB4ID0gc3RhcnMubGVuZ3RoOyBpIDwgeDsgaSsrKSB7XG4gICAgdmFyIHMgPSBzdGFyc1tpXTtcblxuICAgIHMueCArPSBzLnZ4IC8gRlBTO1xuICAgIHMueSArPSBzLnZ5IC8gRlBTO1xuXG4gICAgaWYgKHMueCA8IDAgfHwgcy54ID4gY2FudmFzLndpZHRoKSBzLnZ4ID0gLXMudng7XG4gICAgaWYgKHMueSA8IDAgfHwgcy55ID4gY2FudmFzLmhlaWdodCkgcy52eSA9IC1zLnZ5O1xuICB9XG59XG5cbmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbihlKSB7XG4gIG1vdXNlLnggPSBlLmNsaWVudFg7XG4gIG1vdXNlLnkgPSBlLmNsaWVudFk7XG59KTtcblxuLy8gVXBkYXRlIGFuZCBkcmF3XG5cbmZ1bmN0aW9uIHRpY2soKSB7XG4gIGRyYXcoKTtcbiAgdXBkYXRlKCk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKTtcbn1cblxudGljaygpOyJdLCJmaWxlIjoibWFpbi5qcyJ9
