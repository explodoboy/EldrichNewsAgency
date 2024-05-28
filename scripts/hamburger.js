/*
    Student Name: Chris C.
    File Name: script.js
    Date: 05/27/2024
*/

// Global variables
// ...None, for now.
var hamburger_triggered = false;

// Hamburger menu function
function hamburger() {
    var menu = document.getElementById("links");
    var border = document.getElementById("nav_border");
    var logo = document.getElementById("logo");
    var nav = document.getElementById("nav");
    var top = document.getElementById("top");

    hamburger_triggered = true;

    if (menu.style.display === "block") {
        // Show logo, hide menu
        menu.style.display = "none";
        logo.style.display = "block";
        border.style.borderBlockStart = ""; // Resets to the CSS default

        nav.style.padding = "";
        top.style.padding = "";
    } else {
        // Hide logo, show menu
        menu.style.display = "block";
        logo.style.display = "none";
        border.style.borderBlockStart = "none"; // Resets to the CSS default

        nav.style.padding = "0";
        top.style.padding = "0";
    }
}

// Failsafe to make sure a device switching from phone viewport after using the hamburger doesn't break the header/nav.
function resetOnViewportChange() {
    var menu = document.getElementById("links");
    var border = document.getElementById("nav_border");
    var logo = document.getElementById("logo");
    var nav = document.getElementById("nav");
    var top = document.getElementById("top");

    // Reset everything back to its defaults.
    if (hamburger_triggered === true) {
        menu.style.display = "";
        logo.style.display = "";
        border.style.borderBlockStart = ""; // Resets to the CSS default

        nav.style.padding = "";
        top.style.padding = "";
    }

    // remove need for unnecessary re-activations
    hamburger_triggered = false;
}

window.addEventListener("resize", resetOnViewportChange);