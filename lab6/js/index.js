let currentSlide = 0;

function showSlide(index) {
    const slider = document.getElementsByClassName("slider");

    if (index >= 9) { 
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = 9 - 1;
    }
    else {
        currentSlide = index;
    }

    const translateValue = -currentSlide * 100 + "%";
    slider[0].setAttribute('style', 'transform: translateX(' + translateValue + ')');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function opennav() {
    const popup = document.getElementById('popup');
    document.getElementById("popup").style.width = "100%";
    console.log("negug");
}; 

function closenav() {
    document.getElementById("popup").style.width = "0";
    console.log("negug");
}; 


