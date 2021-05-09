var slideIndex = 1;
var majorPics = false;

var scrollableElement = document.getElementById("scrollableElement");
scrollableElement.addEventListener("wheel", fadeIn);

var scaleOpacity = 0;

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
    alert(slideIndex + '/' + document.getElementsByClassName("mySlides").length);
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

function playVideo() {
    alert("play video here");
}