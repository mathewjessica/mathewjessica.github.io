// Show alert to test script inclusion
function scriptTest() {
    alert("Hey my script is running");
}

// Display the current time, day, and date
function showCurrentDate() {
    const now = new Date();
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" };
    const formattedDate = now.toLocaleDateString("en-US", options);
    document.getElementById("current-date").textContent = `Today is ${formattedDate}`;
}

// Greet user based on input
function greetUser() {
    const name = document.getElementById("user-name").value;
    const mood = document.getElementById("user-mood").value;
    const greeting = `The Jolly Mongoose welcomes you, ${name}! We're glad you are doing ${mood}!`;
    document.getElementById("greeting-message").textContent = greeting;
}

// Show polygon name
function showPolygon() {
    const num = Math.abs(Math.round(parseFloat(document.getElementById("favorite-number").value)));
    const polygons = ["monogon", "digon", "triangle", "quadrilateral", "pentagon", "hexagon", "heptagon", "octagon", "nonagon", "decagon"];
    if (num >= 0 && num <= 10) {
        alert(`Your polygon is a ${polygons[num]}!`);
    } else {
        alert("Please enter a number between 0 and 10.");
    }
}

// Fun functions for Jolly Mongoose
function bakeSavoryCookie() {
    alert("The Jolly Mongoose baked a savory cookie just for you!");
}

function randomCookieFact() {
    const facts = [
        "The first cookie was made in Persia.",
        "Savory cookies pair well with cheese!",
        "Cookies were originally used to test oven temperatures.",
    ];
    alert(facts[Math.floor(Math.random() * facts.length)]);
}

function mongooseAdventure() {
    alert("The Jolly Mongoose went on an adventure and found the secret to savory cookies!");
}

function cookieTrivia() {
    const trivia = [
        "Cookies were brought to America in the 17th century.",
        "A cookie becomes savory when adding herbs and spices.",
        "Did you know? A mongoose is also a fan of cookies!",
    ];
    alert(trivia[Math.floor(Math.random() * trivia.length)]);
}

function recommendCookie() {
    const cookies = ["Cheddar-Chive Cookie", "Parmesan Herb Biscuit", "Savory Oatmeal Cracker"];
    alert(`We recommend trying our ${cookies[Math.floor(Math.random() * cookies.length)]}!`);
}

// Initialize date display
document.addEventListener("DOMContentLoaded", showCurrentDate);
