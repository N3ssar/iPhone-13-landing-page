// Get main elements
const mainImage = document.querySelector(".hero-image");
const sliderImages = document.querySelectorAll(".slider-image");
const body = document.body;
const header = document.querySelector(".header");

// Function to change main image
function changeMainImage(newImageSrc) {
  mainImage.style.transform = "scale(0.9)";

  setTimeout(() => {
    mainImage.src = newImageSrc;
    mainImage.style.transform = "scale(1)";
  }, 150);
}

// Function to change background theme
function changeTheme(theme) {
  body.className = "";

  if (theme) {
    body.classList.add(`theme-${theme}`);
  }
}

// Function to update active image
function updateActiveImage(clickedImage) {
  sliderImages.forEach((img) => {
    img.classList.remove("active");
  });

  clickedImage.classList.add("active");
}

// Add click events to slider images
sliderImages.forEach((image) => {
  image.addEventListener("click", function () {
    const newImageSrc = this.src;
    const theme = this.dataset.theme;

    changeMainImage(newImageSrc);
    changeTheme(theme);
    updateActiveImage(this);
  });
});

// Header scroll effect
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    header.style.background = "rgba(10, 10, 10, 0.95)";
  } else {
    header.style.background = "rgba(10, 10, 10, 0.8)";
  }
});

// Set initial theme when page loads
document.addEventListener("DOMContentLoaded", function () {
  const activeImage = document.querySelector(".slider-image.active");
  if (activeImage) {
    changeTheme(activeImage.dataset.theme);
  }
});

// Smooth scrolling for links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
