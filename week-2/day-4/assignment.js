function goLeft() {
    var jsCarousel = document.getElementById('jsSlider');
    var carousel.style.transform = 'translate(-300px)';
}

document.getElementById('left').addEventListener("click", function () {
    goLeft();
}

function goRight() {
    var carousel = document.getElementById('jsSlider');
    var carousel.style.transform = 'translate(+300px)';
}

document.getElementById('right').addEventListener("click", function () {
    goRight();
}

function randomize() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
}