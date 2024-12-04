$(document).ready(function () {
    const images = [
        { src: "../images/jess.jpg", caption: "J - Jar" },
        { src: "../images/church.JPG", caption: "M - Money" },
        { src: "../images/fox.jpg", caption: "F - Fox" },
        { src: "../images/savory_cookie.jpg", caption: "C - Cookie" }
        // Add more objects for each letter
    ];

    let currentIndex = 0;

    // Updateslideshow content
    function updateSlideshow() {
        const currentImage = images[currentIndex];
        $("#slideshow img").attr("src", currentImage.src).attr("alt", currentImage.caption);
        $("#slideshow figcaption").text(currentImage.caption);
    }

    // Initialize slideshow
    updateSlideshow();

    // Event listeners for navigation buttons
    $("#next").click(function () {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlideshow();
    });

    $("#prev").click(function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlideshow();
    });

    // Generate and bind thumbnail images
    images.forEach((image, index) => {
        const thumbnail = $(`<img class="thumbnail" src="${image.src}" alt="${image.caption}" data-index="${index}">`);
        $("#thumbnail-list").append(thumbnail);
    });

    // Thumbnail click event
    $("#thumbnail-list").on("click", ".thumbnail", function () {
        currentIndex = $(this).data("index");
        updateSlideshow();
    });
    
});
