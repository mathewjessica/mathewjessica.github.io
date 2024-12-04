function setup() {
    createCanvas(400, 400); // Sets up the canvas
}

function draw() {
    if (mouseIsPressed) {
        fill(0); // Black fill when mouse is pressed
    } else {
        fill(255); // White fill when mouse is not pressed
    }
    ellipse(mouseX, mouseY, 50, 50); // Draw a circle at the mouse location
}
