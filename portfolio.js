// scroll-animations.js

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add the 'active' class when the element is scrolled into view
function scrollAnimation() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('active');
        }
    });
}

// Trigger scrollAnimation on page load and when scrolling
window.addEventListener('scroll', scrollAnimation);
window.addEventListener('load', scrollAnimation);

