
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
            const scrollWidth = images[0].offsetWidth + 20; // Get the width of an image + the gap between them

            // Duplicate the images for the circular scrolling effect
            scrollContainer.innerHTML += scrollContainer.innerHTML;

            let currentIndex = 0;

            // Auto-scroll the carousel every 3 seconds
            setInterval(() => {
                // Scroll the container to the next item by a certain distance
                scrollContainer.scrollBy({
                    left: scrollWidth, // Scroll by the width of an image
                    behavior: 'smooth' // Smooth scrolling effect
                });

                // If the container has scrolled past the middle (i.e., second batch of images), reset the scroll position
                if (scrollContainer.scrollLeft >= scrollWidth * images.length) {
                    scrollContainer.scrollLeft = 0;
                }
            }, 3000);
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

