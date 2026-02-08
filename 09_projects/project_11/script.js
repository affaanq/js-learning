// Selecting DOM elements: These are your "hooks" into the HTML.
const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const playingSong = document.getElementById("player-song-title");
const songArtist = document.getElementById("player-song-artist");

// Data Array: A collection of objects. Think of this as your database.
const allSongs = [
  { id: 0, title: "Hello World", artist: "Rafael", duration: "0:23", src: "..." },
  // ... rest of songs
];

// The Web Audio API: This creates an invisible <audio> element in the browser's memory.
const audio = new Audio();

/* STATE MANAGEMENT: This is the brain. 
   If you lose track of this object, the whole app breaks.
*/
const userData = {
  songs: [...allSongs], // Use spread to avoid mutating the original array
  currentSong: null,    // Tracks what is currently playing
  songCurrentTime: 0,   // Tracks where the song was paused
};

/* FUNCTION: playSong
   Analogy: Like a DJ. It finds the record (find), puts it on the turntable (src), 
   decides where to drop the needle (currentTime), and hits start (play()).
*/
const playSong = (id, start = true) => {
  // Find the song object that matches the ID passed in.
  const song = userData.songs.find((song) => song.id === id);
  
  audio.src = song.src;
  audio.title = song.title;

  /*
     Logic Check: If 'start' is true (new song), reset time to 0.
     If false (resuming), use the saved songCurrentTime.
  */
  if (userData.currentSong === null || start) {
    audio.currentTime = 0;
  } else {
    audio.currentTime = userData.songCurrentTime;
  }

  userData.currentSong = song; // Update the "State"
  playButton.classList.add("playing"); // Visual feedback

  // UI Syncing: These four calls ensure the screen matches the data.
  setPlayerDisplay();
  highlightCurrentSong();
  setPlayButtonAccessibleText();
  
  audio.play(); 
};

/*
   FUNCTION: pauseSong
   Critical: We must save the 'audio.currentTime' to userData BEFORE pausing,
   otherwise, we won't know where to resume.
*/
const pauseSong = () => {
  userData.songCurrentTime = audio.currentTime;
  playButton.classList.remove("playing");
  audio.pause();
};

/*
   ARRAY METHODS: Mapping data to index.
   indexOf() looks for the memory reference of the currentSong object 
   within the songs array.
*/
const getCurrentSongIndex = () => userData.songs.indexOf(userData.currentSong);

const getNextSong = () => userData.songs[getCurrentSongIndex() + 1];

const getPreviousSong = () => userData.songs[getCurrentSongIndex() - 1];

// Logic: If there's no previous song, we default to the first song (index 0).
const playPreviousSong = () => {
  if (userData.currentSong === null) return;
  const previousSong = getPreviousSong();
  if (previousSong) {
    playSong(previousSong.id);
  } else {
    playSong(userData.songs[0].id);
  }
};

/*
   LOGIC: playNextSong
   If no next song exists, we reset the player to a "stopped" state.
*/
const playNextSong = () => {
  if (userData.currentSong === null) {
    playSong(userData.songs[0].id);
    return;
  }
  const nextSong = getNextSong();
  if (nextSong) {
    playSong(nextSong.id);
  } else {
    // End of playlist: Clean up the state.
    userData.currentSong = null;
    userData.songCurrentTime = 0;
    setPlayerDisplay();
    highlightCurrentSong();
    setPlayButtonAccessibleText();
    pauseSong();
  }
};

/*
   DOM MANIPULATION: Updating Text
   Optional Chaining (?.) is used here. If currentSong is null, it returns
   undefined instead of throwing an error.
*/
const setPlayerDisplay = () => {
  const currentTitle = userData.currentSong?.title;
  const currentArtist = userData.currentSong?.artist;

  playingSong.textContent = currentTitle ? currentTitle : "";
  songArtist.textContent = currentArtist ? currentArtist : "";
};

/*
   ACCESSIBILITY & UI: Highlighting
   It removes the 'aria-current' attribute from the old song 
   and adds it to the new one using Template Literals.
*/
const highlightCurrentSong = () => {
  const previousCurrentSong = document.querySelector('.playlist-song[aria-current="true"]');
  previousCurrentSong?.removeAttribute("aria-current");
  const songToHighlight = document.getElementById(`song-${userData.currentSong?.id}`);
  songToHighlight?.setAttribute("aria-current", "true");
};

const setPlayButtonAccessibleText = () => {
  const song = userData.currentSong;
  playButton.setAttribute("aria-label", userData.currentSong ? `Play ${song.title}` : "Play");
};

// EVENT LISTENERS: The "triggers"
playButton.addEventListener("click", () => {
  if (userData.currentSong === null) {
    playSong(userData.songs[0].id); // Start from beginning
  } else {
    playSong(userData.currentSong.id, false); // Resume (start=false)
  }
});

// Handling individual song clicks in the list
const songs = document.querySelectorAll(".playlist-song");
songs.forEach((song) => {
  // slice(5) removes "song-" from the ID string "song-0" to get just "0"
  const id = song.getAttribute("id").slice(5);
  const songBtn = song.querySelector("button");
  songBtn.addEventListener("click", () => {
    playSong(Number(id)); // Convert string "0" to number 0
  });
});

pauseButton.addEventListener("click", pauseSong);
nextButton.addEventListener("click", playNextSong);
previousButton.addEventListener("click", playPreviousSong);

// EVENT: ended
// The browser's audio object knows when it hits the end. We hook into that.
audio.addEventListener("ended", playNextSong);