


const images = document.querySelectorAll('img[data-toggle="modal"][data-target="#modal1"]');

// Get the modal image element
const modalImg = document.querySelector('.modal-img');

// Get the prev and next navigation elements
const prevNav = document.querySelector('.prev');
const nextNav = document.querySelector('.next');

// Initialize the current image index
let currentIndex = 0;

// Function to update the modal image
function updateModalImage(index) {
  modalImg.src = images[index].src;
  currentIndex = index;
}

// Add event listeners to the navigation elements
prevNav.addEventListener('click', () => {
  updateModalImage((currentIndex - 1 + images.length) % images.length);
});

nextNav.addEventListener('click', () => {
  updateModalImage((currentIndex + 1) % images.length);
});

// Update the modal image when an image is clicked
images.forEach((image, index) => {
  image.addEventListener('click', () => {
    updateModalImage(index);
  });
});

// Add keyboard navigation
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    updateModalImage((currentIndex - 1 + images.length) % images.length);
  } else if (event.key === 'ArrowRight') {
    updateModalImage((currentIndex + 1) % images.length);
  }
});
