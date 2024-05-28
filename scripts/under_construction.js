/*
    Student Name: Chris C.
    File Name: script.js
    Date: 05/27/2024
*/

function rngConstruction() {
    var min = 1;
    var max = 5;

    // For some reason the RNG script gives an effective max of max-1, so this should fix that.
    max++;

    return parseInt(Math.random() * (max - min) + min);
}

// On the construction page, pull from 1 of 5 images to put on display.
window.onload = function() {
    var imgElement = document.getElementById("under_construction");
    var paragraph = document.getElementById("construction_paragraph");
    var newImg = new Image;

    var random = rngConstruction();

    switch(random)
    {
        case 1:
            newImg.src = "images/construction_drive.png";
            imgElement.alt = "a construction worker driving away from a horde of giant green leeches with teeth. the worker is screaming in horror";
            break;
        case 2:
            newImg.src = "images/construction_fight.png";
            imgElement.alt = "a construction worker standing on top of an industrial vehicle, wielding a bladed powered weapon against a giant green leech with teeth";

            paragraph.innerText = "So get out of here, FLESHBAG. Or YOU—\nWait, what?";
            break;
        case 3:
            newImg.src = "images/construction_hide.png";
            imgElement.alt = "a construction worker hiding underneath a sheet of metal from a giant green leech with teeth, unaware that the leech has found him";
            break;
        case 4:
            newImg.src = "images/construction_pov.png";
            imgElement.alt = "a point-of-view image of a construction worker being attacked by a giant green leech with teeth.";

            paragraph.innerText += "\n\nIn fact, here is a visual guide.";
            break;
        case 5:
            newImg.src = "images/construction_run.png";
            imgElement.alt = "a construction worker in panic running away from a horde of giant green leeches with teeth";
            break;
        default:
            console.log("ERROR: Construction random number script gave a number not between 1 - 5." + random);
    }
    imgElement.src = newImg.src;
}