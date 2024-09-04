document.addEventListener('DOMContentLoaded', () => {
    const heading = "Portfolio."; // Change this to the desired name
    const headingElement = document.getElementById('navbar-heading');
    const duration = 10000; // Duration in milliseconds (10 seconds)
    const interval = 300; // Time between each character (in milliseconds)
    const totalCharacters = heading.length;
    const charactersPerSecond = totalCharacters / (duration / 1000);

    let index = 0;

    function typeLetter() {
        if (index < totalCharacters) {
            headingElement.textContent += heading[index];
            index++;
            setTimeout(typeLetter, interval); // Delay between characters
        }
    }

    typeLetter();
});
