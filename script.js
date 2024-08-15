function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const words = [
  "Electrical Engineer",
  "Low-Voltage Engineer",
  "Front-End Developer",
];
let index = 0;
const textElement = document.getElementById("alternating-text");

function alternateText() {
  textElement.textContent = words[index];
  index = (index + 1) % words.length; // Cycle through the array
}

setInterval(alternateText, 2000); // Change text every 1000ms (1 second)
