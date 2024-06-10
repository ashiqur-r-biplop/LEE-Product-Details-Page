const imageList = document.querySelectorAll(".image-list img");
const displayImage = document.querySelector(".display-image img");
const fullScreenIcon = document.querySelector(".full-screen-icon");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const closeFullScreenButton = document.querySelector(
  ".close-full-screen-image"
);
const fullScreenOverlay = document.querySelector(".view-full-screen");
const fullScreenImage = document.querySelector(
  ".show-full-screen-display-image img"
);
const colorBoxes = document.querySelectorAll(".color");

let currentIndex = 0;
let currentColorIndex = 0;

let currentFullScreenFilter = "";

// Function to update the displayed image
const updateDisplayImage = (index) => {
  const selectedImage = imageList[index];
  if (selectedImage) {
    displayImage.src = selectedImage.src;
    currentIndex = index;
  }
};
const setBorder = (index) => {
  // Loop through all images in imageList
  imageList.forEach((image, i) => {
    // Remove "active" class from all images' parent nodes
    image.parentNode.classList.remove("active");
    // Add "active" class to the parent node of the clicked image
    if (i === index) {
      image.parentNode.classList.add("active");
    }
  });
  // console.log(getImage.parentNode);
};
// Click event for color palates list
imageList.forEach((image, index) => {
  image.addEventListener("click", () => {
    updateDisplayImage(index);
    setBorder(index);
  });
});

// Click event for color palates list
colorBoxes.forEach((colorBox, index) => {
  colorBox.addEventListener("click", () => {
    setColorPalatesActives(index);
  });
});

const setColorPalatesActives = (index) => {
  colorBoxes.forEach((colorBox, i) => {
    // Remove "active" class from all color box parent nodes
    colorBox.classList.remove("active");
    // Add "active" class to the parent node of the clicked color box
    if (i === index) {
      colorBox.classList.add("active");
    }
  });
};
// Click event for full-screen icon
// Click event for full-screen icon
fullScreenIcon.addEventListener("click", () => {
  fullScreenOverlay.style.display = "flex";
  fullScreenImage.src = displayImage.src;
  fullScreenImage.style.filter = currentFullScreenFilter; // Apply the filter to fullScreenImage
});

// Click event for closing full-screen mode
closeFullScreenButton.addEventListener("click", () => {
  fullScreenOverlay.style.display = "none";
});
// Click event for closing full-screen mode when clicking outside the image
fullScreenOverlay.addEventListener("click", (event) => {
  if (event.target === fullScreenOverlay) {
    fullScreenOverlay.style.display = "none";
  }
});
// Click event for previous button
prevButton.addEventListener("click", () => {
  const newIndex = currentIndex > 0 ? currentIndex - 1 : imageList.length - 1;
  updateDisplayImage(newIndex);
  setBorder(newIndex);
});

// Click event for next button
nextButton.addEventListener("click", () => {
  const newIndex = currentIndex < imageList.length - 1 ? currentIndex + 1 : 0;
  updateDisplayImage(newIndex);
  setBorder(newIndex);
});

function setColorImage(filter) {
  const displayImage = document.querySelector(".display-image img");
  displayImage.style.filter = filter;
  currentFullScreenFilter = filter;
}
// set active index
setBorder(0);
setColorPalatesActives(0);
