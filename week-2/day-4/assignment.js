var currentImgPosition = 0;

function goLeft() {
    if (currentImgPosition > 0) {
    currentImgPosition--;
    var jsSlider = document.getElementById('jsSlider');
    slider.style.transform = "translate(-" +
    currentImgPosition * 300 + "px)";
    }
}

function goRight() {
    if (currentImgPosition < 4) {
    currentImgPosition++;
    var jsSlider = document.getElementById('jsSlider');
    slider.style.transform = "translate(-" +
    currentImgPosition * 300 + "px)";
    }
}
function repeat() {
    setTimeout(function(){
        repeat();
    }, 1000);
}

