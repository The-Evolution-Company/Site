
console.log("Welcome to The Evalution!");

document.getElementById("menuToggle").addEventListener("click", function() {
    var navLinks = document.getElementById("navLinks");
    
    // Toggle the 'active' class to show or hide the navigation links
    navLinks.classList.toggle("active");
});
//-------------------------------------------------------------------------
// document.addEventListener('DOMContentLoaded', function () {
//     let photos = document.querySelectorAll('.person');
//     let currentIndex = 0;

//     let startX, endX;
//     const minSwipeDistance = 50; // Minimum swipe distance to trigger a swap

//     // Function to update the photo visibility
//     function swapPhotos() {
//         photos.forEach(photo => photo.style.opacity = 0); // Hide all photos
//         photos[currentIndex].style.opacity = 1; // Show the current photo
//     }

//     // Initialize the first photo as visible
//     swapPhotos();

//     // Function to detect swipe gestures
//     function handleTouchStart(event) {
//         startX = event.touches[0].clientX; // Get the starting X position of the touch
//     }

//     function handleTouchEnd(event) {
//         endX = event.changedTouches[0].clientX; // Get the ending X position of the touch
//         let swipeDistance = startX - endX;

//         if (Math.abs(swipeDistance) > minSwipeDistance) {
//             if (swipeDistance > 0) {
//                 // Swipe left (move to next photo)
//                 currentIndex = (currentIndex + 1) % photos.length;
//             } else {
//                 // Swipe right (move to previous photo)
//                 currentIndex = (currentIndex - 1 + photos.length) % photos.length;
//             }
//             swapPhotos();
//         }
//     }

//     // Add event listeners for touch events
//     document.querySelector('.photo-carousel').addEventListener('touchstart', handleTouchStart, false);
//     document.querySelector('.photo-carousel').addEventListener('touchend', handleTouchEnd, false);

//     // Optional: Auto-swap photos every 3 seconds
//     setInterval(() => {
//         currentIndex = (currentIndex + 1) % photos.length; // Auto-swap every 3 seconds
//         swapPhotos();
//     }, 3000);
// });
document.addEventListener('DOMContentLoaded', function () {
    // Function to handle carousel behavior for mobile view
    function initCarousel() {
        if (window.innerWidth <= 768) {
            const scrollContainer = document.querySelector('.photo-carousel');
            const images = document.querySelectorAll('.person');
            const scrollWidth = images[0].offsetWidth ; // Get the width of an image + the gap between them

            // Duplicate the images for the circular scrolling effect
            scrollContainer.innerHTML += scrollContainer.innerHTML;

            // Add swipe gesture functionality
            let startX, endX;

            // Detect touch start (to determine swipe direction)
            scrollContainer.addEventListener('touchstart', function (e) {
                startX = e.touches[0].clientX;
            });

            // Detect touch end (to calculate swipe distance)
            scrollContainer.addEventListener('touchend', function (e) {
                endX = e.changedTouches[0].clientX;
                let swipeDistance = startX - endX;

                if (Math.abs(swipeDistance) > 50) { // Threshold to trigger the scroll
                    if (swipeDistance > 0) {
                        // Swipe left (move to next photo)
                        scrollContainer.scrollBy({
                            left: scrollWidth, // Scroll by the width of an image
                            behavior: 'smooth' // Smooth scrolling effect
                        });
                    } else {
                        // Swipe right (move to previous photo)
                        scrollContainer.scrollBy({
                            left: -scrollWidth, // Scroll by the width of an image in reverse direction
                            behavior: 'smooth' // Smooth scrolling effect
                        });
                    }
                }
            });

            // Optional: Add mousewheel support for manual scrolling
            scrollContainer.addEventListener('wheel', function (e) {
                if (e.deltaY > 0) {
                    // Scroll to the next image on scroll down
                    scrollContainer.scrollBy({
                        left: scrollWidth, // Scroll by the width of an image
                        behavior: 'smooth' // Smooth scrolling effect
                    });
                } else {
                    // Scroll to the previous image on scroll up
                    scrollContainer.scrollBy({
                        left: -scrollWidth, // Scroll by the width of an image in reverse direction
                        behavior: 'smooth' // Smooth scrolling effect
                    });
                }
            });
        }
    }

    // Run the carousel initialization on page load
    initCarousel();

    // Run the initialization again when the window is resized
    window.addEventListener('resize', function () {
        if (window.innerWidth <= 768) {
            initCarousel(); // Reinitialize the carousel if the window is resized to mobile view
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const images = document.querySelectorAll('.product-image');
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');

    // Function to update image visibility
    function updateCarousel() {
        images.forEach((image, index) => {
            if (index === currentIndex) {
                image.style.display = 'block'; // Show the current image
            } else {
                image.style.display = 'none'; // Hide the rest of the images
            }
        });
    }

    // Initialize carousel to show the first image
    updateCarousel();

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = images.length - 1; // Loop back to the last image
        }
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the first image
        }
        updateCarousel();
    });
});
