// Function to update greeting based on the time of day
function updateGreeting() {
    const greetingElement = document.getElementById("greeting");
    const currentHour = new Date().getHours();  // Get the current hour

    // Set the greeting based on the current time
    if (currentHour < 12) {
        greetingElement.innerText = "Good Morning!";
    } else if (currentHour < 18) {
        greetingElement.innerText = "Good Afternoon!";
    } else {
        greetingElement.innerText = "Good Evening!";
    }
}

// Call the function to update the greeting
updateGreeting();
