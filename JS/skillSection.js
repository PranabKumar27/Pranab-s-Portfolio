const scrollingContainer = document.getElementById('scrollingContainer');
    let scrollPosition = 0;
    let scrollSpeed = 1;
    let isPaused = false;

    // Duplicate the content for seamless scrolling
    const clone = scrollingContainer.innerHTML;
    scrollingContainer.innerHTML += clone;

    // Scroll content
    function scrollContent() {
        if (!isPaused) {
            scrollPosition += scrollSpeed;

            if (scrollPosition >= scrollingContainer.scrollWidth / 2) {
                scrollPosition = 0;
            }

            scrollingContainer.style.transform = `translateX(-${scrollPosition}px)`;

        }

        requestAnimationFrame(scrollContent);
    }

    // Start the scrolling animation
    scrollContent();

    // Pause scrolling on hover
    scrollingContainer.addEventListener('mouseover', () => {
        isPaused = true;
    });

    // Resume scrolling when hover ends
    scrollingContainer.addEventListener('mouseout', () => {
        isPaused = false;
    });