// script.js

// Function to display current date and time
function displayDateTime() {
    const dateElement = document.getElementById('currentDateTime');
    const now = new Date();
    const options = { 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true, 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const formattedDate = now.toLocaleString('en-US', options);
    dateElement.textContent = `Today is ${formattedDate}`;
}

// Function to handle greeting form submission
function handleGreetingForm(event) {
    event.preventDefault();
    const name = document.getElementById('userName').value;
    const mood = document.getElementById('userMood').value;
    const greetingMessage = document.getElementById('greetingMessage');
    greetingMessage.innerHTML = `
        <p>The Jolly Mongoose Cookies welcomes you, <strong>${name}</strong>!</p>
        <p>We're glad you are doing <strong>${mood}</strong>!</p>
    `;
}

// Function to handle favorite number form submission
function handleNumberForm(event) {
    event.preventDefault();
    let number = parseFloat(document.getElementById('favoriteNumberInput').value);
    number = Math.round(Math.abs(number));

    const polygonNames = [
        'Point (0 sides)',
        'Monogon (1 side)',
        'Digon (2 sides)',
        'Triangle (3 sides)',
        'Quadrilateral (4 sides)',
        'Pentagon (5 sides)',
        'Hexagon (6 sides)',
        'Heptagon (7 sides)',
        'Octagon (8 sides)',
        'Nonagon (9 sides)',
        'Decagon (10 sides)',
        'Hendecagon (11 sides)',
        'Dodecagon (12 sides)'
    ];

    if (number < 0) number = 0;
    if (number >= polygonNames.length) {
        alert('Number is too large! Please enter a number between 0 and 12.');
        return;
    }

    alert(`A polygon with ${number} sides is called a ${polygonNames[number]}.`);
}

// Jolly Mongoose Themed Functions

// 1. Tell a Jolly Joke
function tellJollyJoke() {
    const jokes = [
        "Why did the mongoose bring a ladder? Because it wanted to reach new heights in cookie baking!",
        "What do you call a mongoose that can sing? A meow-sician!",
        "Why are Jolly Mongoose cookies so happy? Because they're always in a good dough!",
        "How does a mongoose start a party? With a pounce!",
        "Why did the Jolly Mongoose apply for a job? It wanted to be the cream of the crop!"
    ];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    alert(randomJoke);
}

// 2. Mongoose Fact
function getMongooseFact() {
    const facts = [
        "Mongoses are known for their agility and playful nature.",
        "A group of mongoose is called a 'mob'.",
        "Mongoses can eat over 300 snakes in a year!",
        "The mongoose is a symbol of protection in many cultures.",
        "Mongoses have excellent memories and can recognize individual humans."
    ];
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    alert(randomFact);
}

// 3. Mongoose and Mango
function mangoMongoose() {
    alert("The Jolly Mongoose loves mango-flavored cookies! 🍪🥭");
}

// 4. Cookie Suggestion
function cookieSuggestion() {
    const suggestions = [
        "Try our Spicy Chili Chocolate Chip Cookies!",
        "Our Garlic Parmesan Savory Cookies are a must-try!",
        "Experience the tangy delight of Lemon Herb Cookies!",
        "Indulge in our Cheddar and Chive Crunch Cookies!",
        "Enjoy the sweet and savory blend of Maple Bacon Cookies!"
    ];
    const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
    alert(randomSuggestion);
}

// 5. Random Mongoose Action
function randomMongooseAction() {
    const actions = [
        "The Jolly Mongoose is dancing merrily!",
        "The Jolly Mongoose is baking cookies with extra love!",
        "The Jolly Mongoose is exploring new flavors!",
        "The Jolly Mongoose is sharing cookies with friends!",
        "The Jolly Mongoose is planning a cookie party!"
    ];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    alert(randomAction);
}

// Function to update validation links in the footer
function updateValidationLinks() {
    const currentURL = window.location.href;
    document.getElementById('validationLink1').href = `https://validator.w3.org/check?uri=${encodeURIComponent(currentURL)}`;
    document.getElementById('validationLink2').href = `https://jigsaw.w3.org/css-validator/validator?uri=${encodeURIComponent(currentURL)}`;
}

// Event Listeners
window.onload = function() {
    displayDateTime();

    // Greeting Form Submission
    const greetingForm = document.getElementById('greetingForm');
    greetingForm.addEventListener('submit', handleGreetingForm);

    // Number Form Submission
    const numberForm = document.getElementById('numberForm');
    numberForm.addEventListener('submit', handleNumberForm);

    // Update validation links
    updateValidationLinks();

    // Attach Event Listeners to Buttons
    document.getElementById('tellJollyJokeBtn').addEventListener('click', tellJollyJoke);
    document.getElementById('getMongooseFactBtn').addEventListener('click', getMongooseFact);
    document.getElementById('mangoMongooseBtn').addEventListener('click', mangoMongoose);
    document.getElementById('cookieSuggestionBtn').addEventListener('click', cookieSuggestion);
    document.getElementById('randomMongooseActionBtn').addEventListener('click', randomMongooseAction);
};
