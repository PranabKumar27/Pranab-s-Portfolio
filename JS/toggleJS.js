const centerDiv = document.getElementById('centerDiv');
        const elements = document.querySelectorAll('.element');
        const body = document.querySelector('body');
        const content = document.getElementById('content');
        const toggleButton = document.getElementById('toggleButton');
        let isExpanded = false; // To track the state

        function updatePositions() {
            if (window.matchMedia('(min-width: 1024px)').matches) {
                radius = centerDiv.offsetWidth * 3;
            }

            if (window.matchMedia('(max-width: 767px)').matches) {
                radius = centerDiv.offsetWidth * 1.5;
            }
            elements.forEach((element, index) => {
                const angle = (index / elements.length) * 2 * Math.PI; // Evenly distribute the elements
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                element.style.transform = `translate(${x}px, ${y}px) scale(${isExpanded ? 1 : 0})`;
            });
        }

        // Calculate positions initially
        updatePositions();

        window.addEventListener('resize', updatePositions); // Recalculate positions on window resize

        // Toggle main div and elements when clicking the button
        toggleButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent click from bubbling up to the document
            document.body.classList.toggle('expanded'); // Toggle expanded class
            content.classList.toggle('blurred'); // Toggle blur effect
            centerDiv.classList.toggle('expanded'); // Toggle visibility
            isExpanded = !isExpanded; // Toggle the state
            updatePositions(); // Update positions
        });

        // Hide elements and remove blur when clicking outside of the main div
        document.addEventListener('click', (event) => {
            if (isExpanded && !centerDiv.contains(event.target) && event.target !== toggleButton) {
                document.body.classList.remove('expanded'); // Remove expanded class
                content.classList.remove('blurred'); // Remove blur effect
                centerDiv.classList.remove('expanded'); // Hide the main div
                isExpanded = false; // Reset the state
                updatePositions(); // Update positions to collapse elements
            }
        });

        // Hide the main div and elements when clicking on any anchor tag
        elements.forEach((element) => {
            element.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent click from bubbling up to the document
                document.body.classList.remove('expanded'); // Remove expanded class
                content.classList.remove('blurred'); // Remove blur effect
                centerDiv.classList.remove('expanded'); // Hide the main div
                isExpanded = false; // Reset the state
                updatePositions(); // Update positions to collapse elements
            });
        });