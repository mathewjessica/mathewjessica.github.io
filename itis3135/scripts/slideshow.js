$(document).ready(function () {
    let slideIndex = 1; // Start with the first slide
    showSlides(slideIndex);

    // Next/Previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        const slides = $(".mySlides");
        const dots = $(".demo");
        const captionText = $("#caption");

        // Loop back to the first slide if at the end
        if (n > slides.length) slideIndex = 1;
        if (n < 1) slideIndex = slides.length;

        slides.hide(); // Hide all slides
        dots.removeClass("active"); // Remove 'active' class from thumbnails

        slides.eq(slideIndex - 1).show(); // Show the current slide
        dots.eq(slideIndex - 1).addClass("active"); // Highlight the current thumbnail
        captionText.text(dots.eq(slideIndex - 1).attr("alt")); // Update the caption
    }

    // Attach click events to buttons
    $(".prev").click(function () {
        plusSlides(-1);
    });

    $(".next").click(function () {
        plusSlides(1);
    });

    $(".demo").click(function () {
        const index = $(".demo").index(this) + 1;
        currentSlide(index);
    });
});
