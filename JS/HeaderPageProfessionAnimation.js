
const texts = ["Java Developer.", "React Developer.", "Fullstack Developer.", "Web Developer."];
const element = document.getElementById("rotating-text");
let currentIndex = 0;

function rotateText() {
    element.classList.add('slide-out');
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % texts.length;
        element.textContent = texts[currentIndex];
        element.classList.remove('slide-out');
        element.classList.add('slide-in');
        setTimeout(() => {
            element.classList.remove('slide-in');
        }, 500); // Match the slide-in duration
    }, 500); // Match the slide-out duration
}

setInterval(rotateText, 2000);


var typed = new Typed('#name', {
    strings: ['PRANAB KUMAR SAHOO.'],
    typeSpeed: 10,
    showCursor: true,
    onComplete: function (self) {
        // Hide the cursor after typing is completed
        self.cursor.style.display = 'none';
    }
});
