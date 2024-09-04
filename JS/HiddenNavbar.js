
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;
let isScrolling;
let isNavbarVisible = true;
const navbarHeight = 100; // Height of the navbar in pixels

// Function to show the navbar
function showNavbar() {
    navbar.classList.remove('hidden-navbar');
    navbar.classList.add('show-navbar');
    isNavbarVisible = true;
}

// Function to hide the navbar
function hideNavbar() {
    navbar.classList.remove('show-navbar');
    navbar.classList.add('hidden-navbar');
    isNavbarVisible = false;
}

// Handle scroll event to hide or show the navbar
window.addEventListener('scroll', () => {
    if (isScrolling) clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollTop > lastScrollTop) {
            // Scrolling down
            hideNavbar();
        } else {
            // Scrolling up
            if (currentScrollTop < navbarHeight) {
                // Show navbar only if scrolled within navbarHeight from the top
                showNavbar();
            }
        }

        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    }, 100);
});

// Show navbar when cursor is near the top
document.addEventListener('mousemove', (event) => {
    if (event.clientY < 50 && !isNavbarVisible) {
        showNavbar();
    }
});

// Hide navbar when cursor leaves the window
document.addEventListener('mouseleave', () => {
    if (window.pageYOffset > navbarHeight) {
        hideNavbar();
    }
});
