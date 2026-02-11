const display = document.querySelector("#display")
const padBank = document.querySelector("#pad-bank")

function playSong(event) {
  // Check if the clicked element actually is a drum-pad
  if (event.target.classList.contains("drum-pad")) { // you mistaked on classList as className
    const audio = event.target.querySelector(".clip");
    audio.currentTime = 0 // I wrote currentTime() as a mistake
    audio.play();
    displaySong(event.target.id)
  }
}

function displaySong(id) {
  display.textContent = id
}




function playSongKey(event) {
  const key = event.key.toUpperCase();
  const drumPad = document.getElementById(key); // messed up in targetting the id correctly
  
  if (drumPad) {
      drumPad.currentTime = 0;
      drumPad.play();
      displaySong(drumPad.id);
    }
  }


padBank.addEventListener("click", playSong)
document.addEventListener("keydown", playSongKey) // you forget to put document.addEventListener, mistaked it with padBank directly