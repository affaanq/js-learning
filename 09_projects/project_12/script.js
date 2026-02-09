const display = document.querySelector("#display")
const padBank = document.querySelector("#pad-bank")

function playSong(event) {
  // Check if the clicked element actually is a drum-pad
  if (event.target.classList.contains("drum-pad")) {
    const audio = event.target.querySelector(".clip");
    audio.currentTime = 0
    audio.play();
    displaySong(event.target.id)
  }
}

function displaySong(id) {
  display.textContent = id
}




function playSongKey(event) {
  const key = event.key.toUpperCase();
  const drumPad = document.getElementById(key);
  
  if (drumPad) {
      drumPad.currentTime = 0;
      drumPad.play();
      displaySong(drumPad.id);
    }
  }


padBank.addEventListener("click", playSong)
document.addEventListener("keydown", playSongKey)