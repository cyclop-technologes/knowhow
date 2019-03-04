const сanvas = require('./canvas.js');
const head = require('./head.js');

module.exports = () => {
	$('#summary__bg').attr({
		height: window.innerHeight,
	});


	const vw = $(window).width();

	if (vw > 1440) {
		let headBg = сanvas('canvas', 50);
		let summaryBg = сanvas('summary__bg', 250, 2, 0.2);
	}else if (vw <= 1440 && vw > 768) {

		$('#canvas').attr('height', 400);

		let headBg = сanvas('canvas', 50);
		let summaryBg = сanvas('summary__bg', 200, 2, 0.2);


	}else if (vw <= 768 && vw > 475) {
		
		$('#canvas').attr('height', 400);

		let headBg = сanvas('canvas', 20);
		let summaryBg = сanvas('summary__bg', 30, 2, 0.2);
	}else if (vw <= 475) {
		
		$('#canvas').attr('height', 400);

		let headBg = сanvas('canvas', 20);
		let summaryBg = сanvas('summary__bg', 30, 2, 0.2);
	}


	head();
}