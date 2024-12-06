// Set the date of the event
const eventDate = new Date("January 15, 2025 18:30:00").getTime();

// Function to update the countdown
function updateCountdown() {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the time difference between now and the event
    const distance = eventDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown-timer"
    const countdownElement = document.getElementById("countdown-timer");
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the event has passed
    if (distance < 0) {
        clearInterval(interval); // Stop the timer
        countdownElement.innerHTML = "Event Started!";
    }
}

// Update the countdown every 1 second
const interval = setInterval(updateCountdown, 1000);

// Initialize countdown immediately
updateCountdown();
