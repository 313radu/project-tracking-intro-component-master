// Select DOM elements
const body = document.body;
const nav = document.getElementById("navbar");
const menuBtn = document.getElementById("menu-btn");

const topLine = document.getElementById("topLine");
const middleLine = document.getElementById("middleLine");
const bottomLine = document.getElementById("bottomLine");

// Define a class to handle the properties of the menu icon bars
class menuIcon {
    constructor(x, y, z, time, origin) {
        this.x = x;          // Translation in X direction
        this.y = y;          // Translation in Y direction
        this.z = z;          // Rotation angle in degrees
        this.time = time;    // Transition duration
        this.origin = origin; // Transform origin
    }
}

// Create instances of menuIcon for each bar of the menu icon
const topBar = new menuIcon(-20, -20, 45, 0.5, "left");
const midBar = new menuIcon(0, 33, -45, 0.5, "left");
const botBar = new menuIcon(10, 10, 0, 0.5);

// Define the animation timing function
let barAnimation = "cubic-bezier(0,-0.02,1,-1.48)";

// Initialize the clicked state
let clicked = false;

// Add event listener for menu button click
menuBtn.addEventListener("click", () => {
    // Toggle the clicked state
    clicked = !clicked;

    if (clicked) {
        // If clicked, add the toggle class to navbar
        nav.classList.add("navbar-toggle");

        // Apply transformations and transitions to the top line
        topLine.style.transform = `rotateZ(${topBar.z}deg) translateX(${topBar.x}px) translateY(${topBar.y}px)`;
        topLine.style.transformOrigin = `${topBar.origin}`;
        topLine.style.transition = `${topBar.time}s ${barAnimation}`;

        // Apply transformations and transitions to the middle line
        middleLine.style.transform = `rotateZ(${midBar.z}deg) translateX(${midBar.x}px) translateY(${midBar.y}px)`;
        middleLine.style.transformOrigin = `${midBar.origin}`;
        middleLine.style.transition = `${midBar.time}s ${barAnimation}`;

        // Apply transformations and transitions to the bottom line
        bottomLine.style.transform = `translateX(${botBar.x}px) translateY(${botBar.y}px)`;
        bottomLine.style.transition = `${botBar.time}s ${barAnimation}`;
    } else {
        // If not clicked, remove the toggle class from navbar
        nav.classList.remove("navbar-toggle");

        // Reset transformations for all lines
        topLine.style.transform = "translate(0, 0)";
        middleLine.style.transform = "translate(0, 0)";
        bottomLine.style.transform = "translate(0, 0)";
    }
});
