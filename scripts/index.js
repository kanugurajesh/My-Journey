let sound = new Audio('sound/pick.mp3');

// listen when user clicks on the window
window.addEventListener('click', function (event) {
    sound.currentTime = 0;
    sound.play();
});
