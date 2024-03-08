window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    var speed = 0.5; // Adjust this value to change the speed of the parallax effect
    var parallaxEffect = scrollPosition * speed;

    document.querySelector('.parallax-section').style.backgroundPosition = 'center ' + parallaxEffect + 'px';
});