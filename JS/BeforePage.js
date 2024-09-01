window.addEventListener('load', function () {
    // Delay of 5 seconds before hiding the preloader
    setTimeout(function () {
        document.getElementById('load-screen-container').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 3000); // 5000 milliseconds = 5 seconds
}); 