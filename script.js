document.addEventListener("DOMContentLoaded", () => {
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
  const colorBoxes = document.querySelectorAll(".color-box");

  let currentIndex = 0;

  // Function to update the displayed image
  function updateDisplayImage(index) {
    const selectedImage = imageList[index];
    if (selectedImage) {
      displayImage.src = selectedImage.src;
      currentIndex = index;
    }
  }

  // Click event for image list
  imageList.forEach((image, index) => {
    image.addEventListener("click", () => {
      updateDisplayImage(index);
    });
  });

  // Click event for full-screen icon
  fullScreenIcon.addEventListener("click", () => {
    fullScreenOverlay.style.display = "flex";
    fullScreenImage.src = displayImage.src;
  });

  // Click event for closing full-screen mode
  closeFullScreenButton.addEventListener("click", () => {
    fullScreenOverlay.style.display = "none";
  });

  // Click event for previous button
  prevButton.addEventListener("click", () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : imageList.length - 1;
    updateDisplayImage(newIndex);
  });

  // Click event for next button
  nextButton.addEventListener("click", () => {
    const newIndex = currentIndex < imageList.length - 1 ? currentIndex + 1 : 0;
    updateDisplayImage(newIndex);
  });


  // Click event for color boxes
//   colorBoxes.forEach((colorBox) => {
//     colorBox.addEventListener("click", () => {
//       const color = setColorImage();
//       displayImage.style.filter = color;
//     });
//   });
});
function setColorImage(filter) {
    const displayImage = document.querySelector(".display-image img");
    displayImage.style.filter = filter;
  }