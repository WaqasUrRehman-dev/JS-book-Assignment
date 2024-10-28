// 1. Consider you have 4 images in a file as shown below:
// Now When you click on an image it should display in a modal.
// Modal code is available in this assignment file.

// Modal functions
const image = document.querySelectorAll("img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeImg = document.getElementById("closeImg");

image.forEach((img) => {
  img.addEventListener("click", function (e) {
    const src = e.target.src;
    modalImg.src = src;
    modal.style.display = "block";
    closeImg.style.display = "block";
  });

  closeImg.addEventListener("click", function () {
    modal.style.display = "none";
  });
});

// 2. Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-).
// On each click on “zoom in”(+) , add 10px in font size of paragraph.
// And on each click on “zoom out”(-) , minus 10px in font size of paragraph.
// Paragraph zoom functions

const zoomIn = document.getElementById("zoomIn");
const zoomOut = document.getElementById("zoomOut");
const paragraph = document.getElementById("myParagraph");

zoomIn.addEventListener("click", function () {
  const fontSize = parseInt(window.getComputedStyle(paragraph).fontSize);
  paragraph.style.fontSize = fontSize + 10 + "px";
});

zoomOut.addEventListener("click", function () {
  const fontSize = parseInt(window.getComputedStyle(paragraph).fontSize);
  paragraph.style.fontSize = fontSize - 10 + "px";
});

