let slideIndex = [1, 1, 1, 1]; // Initialize slideIndex for each slider

// Call showSlides to initialize sliders
slideIndex.forEach((_, index) => showSlides(1, index));

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
    showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
    let i;
    let slides = document.querySelectorAll(".race-event")[no].getElementsByClassName("slide");
    let dots = document.querySelectorAll(".race-event")[no].getElementsByClassName("dot");
    if (n > slides.length) {slideIndex[no] = 1}
    if (n < 1) {slideIndex[no] = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex[no] - 1].style.display = "block";  
    dots[slideIndex[no] - 1].className += " active";
}
