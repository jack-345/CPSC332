/*
    Name: Jack Ou
    Class: CPSC332
    Assignment: HW4
    Last Modified: 10/9/2024
*/

"use strict";

// List of additional artworks to add dynamically
const newArtworks = [
    { title: 'The Scream', artist: 'Edvard Munch', img: 'https://via.placeholder.com/200' },
    { title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', img: 'https://via.placeholder.com/200' },
    { title: 'The Birth of Venus', artist: 'Sandro Botticelli', img: 'https://via.placeholder.com/200' },
    { title: 'The Night Watch', artist: 'Rembrandt van Rijn', img: 'https://via.placeholder.com/200' },
    { title: 'The Kiss', artist: 'Gustav Klimt', img: 'https://via.placeholder.com/200' },
    { title: 'American Gothic', artist: 'Grant Wood', img: 'https://via.placeholder.com/200' },
    { title: 'Las Meninas', artist: 'Diego Velázquez', img: 'https://via.placeholder.com/200' },
    { title: 'The Last Supper', artist: 'Leonardo da Vinci', img: 'https://via.placeholder.com/200' },
    { title: 'Water Lilies', artist: 'Claude Monet', img: 'https://via.placeholder.com/200' },
    { title: 'Starry Night Over the Rhône', artist: 'Vincent van Gogh', img: 'https://via.placeholder.com/200' }
];

//initializing variables
let viewedCount = 0;
let displayCount = document.getElementById("counter");
let artGrid = document.getElementsByClassName("art-grid")[0];
let artDiv = document.getElementsByClassName("art-panel");

//highlighting clicked art divs
artGrid.addEventListener("click", function(event) {
    const artPanel = event.target.closest(".art-panel"); // Get the closest art panel
    if (artPanel) {
        if (artPanel.style.backgroundColor === "red") {
            artPanel.style.backgroundColor = "";
            if (viewedCount > 0) {
            viewedCount--;
            }
        }
        else {
            artPanel.style.backgroundColor = "red";
            viewedCount++;
        }
        displayCount.textContent = `Artworks Viewed: ${viewedCount}`;
    }
});

//adding button
document.getElementById("add-art-button").addEventListener("click", function() {
    if (newArtworks.length > 0) {

        //create randomly generated index number
        let randomIndex = Math.floor(Math.random() * newArtworks.length);
        let randomArt = newArtworks[randomIndex];

        // Create new art panel
        let artDiv = document.createElement("div");
        artDiv.classList.add("art-panel");

        // Create image and description
        let img = document.createElement("img");
        img.src = randomArt.img;
        img.alt = randomArt.title;

        let description = document.createElement("p");
        description.textContent = `${randomArt.title} by ${randomArt.artist}`;

        // Append image and description to the new art panel
        artDiv.appendChild(img);
        artDiv.appendChild(description);

        // Append new art panel to the art grid
        artGrid.appendChild(artDiv);
    }
});

//reset button
document.getElementById("reset-button").addEventListener("click", function() {
    while (artGrid.children.length > 3) {
        artGrid.removeChild(artGrid.lastChild);
    }
    viewedCount = 0;
    displayCount.textContent = `Artworks Viewed: ${viewedCount}`;
});