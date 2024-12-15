let currentSlide = 0;

function showSlide(index) {
    const slider = document.getElementsByClassName("slider");
    const slides = document.querySelector("article");

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

document.getElementById('list1').addEventListener('click', function() {
    const popup = document.getElementById('popup');
    if (popup.classList.contains('hidden')) {
        popup.classList.remove('hidden');
        popup.classList.add('visible');
    } else {
        popup.classList.remove('visible');
        popup.classList.add('hidden');
    }
});