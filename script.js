// const envelope = document.querySelector('.envelope-wrapper');
//         envelope.addEventListener('click', () => {
//             envelope.classList.toggle('flap');
//         });
let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}

var audio = new Audio('./assets/DKWTS.mp3')

var button = document.getElementById('audiobtn');
button.innerHTML = '<img src="./assets/musical-note.png">';

button.addEventListener('click', function() {
    if(audio.paused) {
        audio.play();
        button.innerHTML = '<img src="./assets/pause.png">';
    }
    else {
        audio.pause();
        button.innerHTML = '<img src="./assets/play-button-arrowhead.png">';
    }
});