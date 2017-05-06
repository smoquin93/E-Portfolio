var colors = ['#f9feff', '#faf4ff', '#f9fff9'];

var changeBackground = function() {
	document.body.style.background = colors[Math.floor(Math.random()*colors.length)];
};

changeBackground();