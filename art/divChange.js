var colors = ['#760CE8', '#4782B1', '#E8890C'];

var changeBackground = function() {
    document.body.style.background = colors([Math.floor(Math.random()*colors.length)]);
};

changeBackground();