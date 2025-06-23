let counter = 0;

function addtoconter() {
    counter += 2;
    document.getElementById("conter").textContent = counter;
     const sound = document.getElementById('floppaSound');
    sound.currentTime = 0; // Rewind to start
    sound.play();
}