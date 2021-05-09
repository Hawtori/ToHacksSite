var slideIndexMajor = 1;
var majorActive = false;
var slideIndexMinor = 1;
var minorActive = false;

function openAbout() {
    document.getElementById("sidePanel").style.width = "20%";
}

function closeAbout() {
    document.getElementById("sidePanel").style.width = "0px";
}

function scrollToHere(idName, m) {
    if (m == 'minor') {
        setActiveMinor();
    }
    if (m == 'major') {
        setActiveMajor();
    }
    document.getElementById(idName).scrollIntoView();
}

function setActiveMajor() {
    majorActive = true;
    minorActive = false;
    document.getElementById("minor").style.visibility = "hidden";
    document.getElementById("major").style.visibility = "visible";
    showSlide(1);
}

function setActiveMinor() {
    minorActive = true;
    majorActive = false;
    document.getElementById("minor").style.visibility = "visible";
    document.getElementById("major").style.visibility = "hidden";
    showSlide(1);
}

function plusSlidesMinor(n) {
    showSlide(slideIndexMinor += n);
}

function currentSlideMinor(n) {
    showSlide(slideIndexMinor = n);
}

function plusSlidesMajor(n) {
    showSlide(slideIndexMajor += n);
}

function currentSlideMajor(n) {
    showSlide(slideIndexMajor = n);
}

function showSlide(n) {
    if (minorActive == true) {
        var i;
        var slide = document.getElementsByClassName("slidesMinor");
        var dots = document.getElementsByClassName("dotMinor");

        //loop it
        if (n > slide.length) slideIndexMinor = 1;
        if (n < 1) slideIndexMinor = slide.length;

        for (i = 0; i < slide.length; i++) slide[i].style.display = "none";
        for (i = 0; i < dots.length; i++) dots[i].className = dots[i].className.replace(" activeMinor", "");

        slide[slideIndexMinor - 1].style.display = "block";
        dots[slideIndexMinor - 1].className += " activeMinor";
    }
    if (majorActive == true) {
        var i;
        var slide = document.getElementsByClassName("slidesMajor");
        var dots = document.getElementsByClassName("dotMajor");

        //loop it
        if (n > slide.length) slideIndexMinor = 1;
        if (n < 1) slideIndexMinor = slide.length;

        for (i = 0; i < slide.length; i++) slide[i].style.display = "none";
        for (i = 0; i < dots.length; i++) dots[i].className = dots[i].className.replace(" activeMajor", "");

        slide[slideIndexMinor - 1].style.display = "block";
        dots[slideIndexMinor - 1].className += " activeMajor";
    }
    
}
