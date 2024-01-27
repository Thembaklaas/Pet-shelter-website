let slideIndex = 0;
showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("event-slide");
    
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

// script.js
// script.js
document.addEventListener('DOMContentLoaded', function () {
    try {
        // Get the current year
        const currentYear = new Date().getFullYear();
 
        // Find the span element by ID
        const yearSpan = document.getElementById('currentYear');
 
        // Check if the span element is found
        if (yearSpan) {
            // Update the content of the span element with the current year
            yearSpan.textContent = currentYear;
        } else {
            // Log an error if the span element is not found
            console.error('Span element with ID "currentYear" not found.');
        }
    } catch (error) {
        // Log any other errors that might occur
        console.error('An error occurred:', error);
    }
 });
 
