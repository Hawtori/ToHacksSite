var slideIndex = 1;
var majorPics = false;

var scrollableElement = document.getElementById("scrollableElement");
scrollableElement.addEventListener("wheel", fadeIn);

var scaleOpacity = 0;

let videoLink = '';

document.onkeydown = function (evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        alert();
        document.getElementById("scales").style.display = "block";
        var maj = document.getElementsByClassName("majorSlideShow");
        maj[0].style.display = "none"; maj[1].style.display = "none";
        var min = document.getElementsByClassName("minorSlideShow");
        min[0].style.display = "none"; min[1].style.display = "none";
        document.getElementsByClassName("button2")[0].style.zIndex = 2;
        document.getElementById("scales").className = " fade-back";
    }
};

function openAbout() {
    document.getElementById("sidePanel").style.width = "20%";
}

function closeAbout() {
    document.getElementById("sidePanel").style.width = "0px";
}

function fadeIn() {
    var delta;
    if (event.wheelDelta) {
        delta = event.wheelDelta;
    } else {
        delta = -1 * event.deltaY;
    }
    if (delta < 0 && scaleOpacity < 1) {
        scaleOpacity += 0.2;
    } else if (delta > 0 && scaleOpacity > 0) {
        scaleOpacity -= 0.22;
    }
        document.getElementById("scales").className = "";
    document.getElementById("scales").style.opacity = scaleOpacity;
}

function scrollToHere(idName, m) {
    if (m == 'start') {
        document.getElementById("scales").className = " fade-back";
    }
    if (m == 'minor') {
        document.getElementById("scales").className = " fade-gone";
        setActiveMinor();
    }
    if (m == 'major') {
        document.getElementById("scales").className = " fade-gone";
        setActiveMajor();
    }
    document.getElementById(idName).scrollIntoView();
}

function setActiveMajor() {
    majorPics = true;
    document.getElementById("scales").style.display = "none";
    var maj = document.getElementsByClassName("majorSlideShow");
    maj[0].style.visibility = "visible"; maj[1].style.visibility = "visible";
    var min = document.getElementsByClassName("minorSlideShow");
    min[0].style.visibility = "hidden"; min[1].style.visibility = "hidden";
    showSlide(slideIndex);
}

function setActiveMinor() {
    majorPics = false;
    document.getElementById("scales").style.display = "none";
    var maj = document.getElementsByClassName("majorSlideShow");
    maj[0].style.visibility = "hidden"; maj[1].style.visibility = "hidden";
    var min = document.getElementsByClassName("minorSlideShow");
    min[0].style.visibility = "visible"; min[1].style.visibility = "visible";
    showSlide(slideIndex);
}

function plusSlides(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    if (majorPics == false) {

        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length / 2) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length / 2 }
        for (i = 0; i < slides.length / 2; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length / 2; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
    else {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length / 2) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length / 2 }
        for (i = 0; i < slides.length / 2; i++) {
            slides[i + 3].style.display = "none";
        }
        for (i = 0; i < dots.length / 2; i++) {
            dots[i + 2].className = dots[i + 2].className.replace(" active", "");
        }
        slides[slideIndex + 2].style.display = "block";
        dots[slideIndex + 2].className += " active";
    }
}

// function playVideo(which) {
//     if (which == 'm1') alert("Play video minor 1");
//     if (which == 'm2') alert("Play video minor 2");
//     if (which == 'm3') alert("Play video minor 3");
//     if (which == 'M1') alert("Play video major 1");
//     if (which == 'M2') alert("Play video major 2");
//     if (which == 'M3') alert("Play video major 3");
// }

function playVideo(which) {
    if (which == 'm1') {videoLink = 'OVct34NUk3U'; createVideo()}
    if (which == 'm2') {videoLink = 'zMJYp-MqCGo'; createVideo()}
    if (which == 'm3') {videoLink = 'QrByMTa_rjQ'; createVideo()}
    if (which == 'M1') {videoLink = "OVct34NUk3U"; createVideo()} // plays ocean for M1
    if (which == 'M2') {videoLink = 'OVct34NUk3U'; createVideo()} 
    if (which == 'M3') {videoLink = 'zMJYp-MqCGo'; createVideo()} // plays rain sounds for m2

}

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function createVideo() {
    document.getElementById("player").style.visibility = "visible";
    player = new YT.Player('player', {
    //height: '390',
    //width: '640',
    videoId: videoLink,
    playerVars: {
        'playsinline': 1,
        'autoplay': 1,
        'enablejsapi': 1,
        'loop': 1
    },
    events: {
        'onReady': onPlayerReady
    }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}