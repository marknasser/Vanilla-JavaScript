//elements
const imageHeader = document.querySelector("#header");
imageHeader.style.textAlign = "end";

// const newHeader = document.createElement("div");
const newImage = document.createElement("img");
newImage.src = document.querySelector("#header").querySelector("img").src;
document.body.appendChild(newImage);
