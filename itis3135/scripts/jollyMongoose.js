const currentdate = new Date();
const datetime = (currentdate.getMonth() + 1) + "/" +
    currentdate.getDate() + "/" +
    currentdate.getFullYear() + " @ " +
    currentdate.getHours() + ":" +
    currentdate.getMinutes() + ":" +
    currentdate.getSeconds();
const currentDay = currentdate.getDay();
let actualday;

switch (currentDay) {
    case 0:
        actualday = "Sunday";
        break;
    case 1:
        actualday = "Monday";
        break;
    case 2:
        actualday = "Tuesday";
        break;
    case 3:
        actualday = "Wednesday";
        break;
    case 4:
        actualday = "Thursday";
        break;
    case 5:
        actualday = "Friday";
        break;
    case 6:
        actualday = "Saturday";
        break;
}

const companyname = "Jolly Mongoose";
const dateElement = document.getElementById("current-date");
dateElement.innerHTML = `Today is ${actualday}, ${datetime}`;

// User Greeting Section
const greetingMessage = document.getElementById("greeting-message");
const submitFeelingButton = document.getElementById("user-form").querySelector("button");

submitFeelingButton.onclick = function displayGreeting() {
    let name = document.getElementById("user-name").value;
    let feeling = document.getElementById("user-mood").value;

    if (name !== "" && feeling !== "") {
        greetingMessage.innerHTML = `The ${companyname} welcomes you, ${name}!<br>We're glad you are doing ${feeling}!`;
    } else {
        greetingMessage.innerHTML = "Please fill out both fields.";
    }
};

// Polygon Finder Section
const submitPolygonButton = document.querySelector("#favorite-number").nextElementSibling;

submitPolygonButton.onclick = function displayPolygon() {
    let number = Math.abs(Math.round(Number(document.getElementById("favorite-number").value)));
    let polygonName;

    switch (number) {
        case 0:
            polygonName = "Not a polygon";
            break;
        case 1:
            polygonName = "Monogon";
            break;
        case 2:
            polygonName = "Bigon";
            break;
        case 3:
            polygonName = "Triangle";
            break;
        case 4:
            polygonName = "Quadrilateral";
            break;
        case 5:
            polygonName = "Pentagon";
            break;
        case 6:
            polygonName = "Hexagon";
            break;
        case 7:
            polygonName = "Heptagon";
            break;
        case 8:
            polygonName = "Octagon";
            break;
        case 9:
            polygonName = "Nonagon";
            break;
        case 10:
            polygonName = "Decagon";
            break;
        default:
            polygonName = "Out of range";
    }

    alert(polygonName);
};

// Fun Functions Section
const bakeSavoryCookie = () => {
    alert("Your savory cookie is baking in the oven!");
};

const randomCookieFact = () => {
    const facts = [
        "Cookies were first invented in 7th century Persia.",
        "The word 'cookie' comes from the Dutch word 'koekje'.",
        "The first chocolate chip cookie was created in 1938.",
        "Americans eat over 2 billion cookies a year.",
        "The Jolly Mongoose loves savory cookies the most!"
    ];
    const randomIndex = Math.floor(Math.random() * facts.length);
    alert(facts[randomIndex]);
};

const mongooseAdventure = () => {
    alert("The mongoose ventures into the wild jungle, ready to face any challenge!");
};

const cookieTrivia = () => {
    alert("Did you know? Cookies are often used to celebrate holidays around the world!");
};

const recommendCookie = () => {
    const cookies = [
        "Chocolate Chip Cookie",
        "Oatmeal Raisin Cookie",
        "Peanut Butter Cookie",
        "Snickerdoodle",
        "Savory Herb Biscuit"
    ];
    const randomIndex = Math.floor(Math.random() * cookies.length);
    alert(`Today's recommendation: ${cookies[randomIndex]}`);
};
