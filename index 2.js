function toggleMenu() {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}
let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showSlide(index) {
    // Hide all images
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    // Show the selected image
    slides[index].style.display = 'block';
}

function changeSlide(direction) {
    currentSlide += direction;

    // Loop back around if at the end of the slides
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    // Loop back to the last slide if at the beginning
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    // Show the new slide
    showSlide(currentSlide);
}

// Initialize the first slide
showSlide(currentSlide);

