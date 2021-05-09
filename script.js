var slideIndex = 1;

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
    document.getElementById("scales").style.display = "none";
    document.getElementsByClassName("majorSlideShow").style.display = "block";
    document.getElementsByClassName("minorSlideShow").style.display = "none";
    showSlide(slideIndex);
}

function setActiveMinor() {
    document.getElementById("scales").style.display = "none";
    document.getElementsByClassName("majorSlideShow").style.display = "none";
    document.getElementsByClassName("minorSlideShow").style.display = "block";
    alert("showing minor slides");
    showSlide(slideIndex);
}

function plusSlides(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}


function showSlide(n) {
    alert("showing slides");
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
