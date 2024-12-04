$(document).ready(function () {
    let currentIndex = 0;
    const slides = $(".slide");  // Get all images with the 'slide' class
    const totalSlides = slides.length;  // Get the total number of slides
    // Function to show the current slide and update the caption
    function showSlide(index) {
        // Hide all slides initially and remove 'active' class
        slides.removeClass("active").hide();

        // Show the selected slide and add 'active' class
        $(slides[index]).addClass("active").show();

        // Update the caption dynamically from the 'data-caption' attribute
        const captionText = $(slides[index]).attr("data-caption");
        $("#caption").text(captionText);  // Update the caption text

        // Highlight the corresponding letter in the gallery
        $(".image-gallery ul li p").removeClass("highlight");
        $(`.image-gallery ul li:eq(${index}) p`).addClass("highlight");
    }

    // Show the first slide initially
    showSlide(currentIndex);

    // Image gallery click event to switch slides
    $(".image-gallery img").click(function () {
        console.log("Image clicked");
        const clickedIndex = $(this).parent().index();  // Get index of the clicked thumbnail
        currentIndex = clickedIndex;  // Update the current index
        showSlide(currentIndex);  // Show the clicked slide
    });

    // Optional: Navigation buttons (if you want to add 'Next' and 'Previous' buttons)
    $("#next").click(function () {
        currentIndex = (currentIndex + 1) % totalSlides;  // Go to the next slide, wrap around
        showSlide(currentIndex);
    });

    $("#prev").click(function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;  // Go to the previous slide, wrap around
        showSlide(currentIndex);
    });
});
