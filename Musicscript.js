// Music Player
const audioPlayer = document.querySelector("#audioPlayer");
const playPauseBtn = document.querySelector("#playPauseBtn");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");
const volumeSlider = document.querySelector("#volumeSlider");
const progressBar = document.querySelector("#progressBar");

let isPlaying = false;
let currentSongIndex = 0;
let songs = [
  {
    title: "Song 1",
    artist: "Artist 1",
    src: "song1.mp3",
    duration: 180
  },
  {
    title: "Song 2",
    artist: "Artist 2",
    src: "song2.mp3",
    duration: 210
  },
  {
    title: "Song 3",
    artist: "Artist 3",
    src: "song3.mp3",
    duration: 240
  }
];

// Initialize audio player
function initAudioPlayer() {
  audioPlayer.src = songs[currentSongIndex].src;
  audioPlayer.volume = volumeSlider.value / 100;
  progressBar.max = songs[currentSongIndex].duration;
  progressBar.value = 0;
}

// Play or pause the song
function togglePlayPause() {
  if (isPlaying) {
    audioPlayer.pause();
  } else {
    audioPlayer.play();
  }
}

// Play the next song
function playNextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  initAudioPlayer();
  audioPlayer.play();
}

// Play the previous song
function playPrevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  initAudioPlayer();
  audioPlayer.play();
}

// Update song progress
function updateProgress() {
  progressBar.value = audioPlayer.currentTime;
}

// Update volume
function updateVolume() {
  audioPlayer.volume = volumeSlider.value / 100;
}

// Event listeners
playPauseBtn.addEventListener("click", () => {
  togglePlayPause();
});

nextBtn.addEventListener("click", () => {
  playNextSong();
});

prevBtn.addEventListener("click", () => {
  playPrevSong();
});

volumeSlider.addEventListener("input", () => {
  updateVolume();
});

audioPlayer.addEventListener("timeupdate", () => {
  updateProgress();
});

audioPlayer.addEventListener("ended", () => {
  playNextSong();
});

// Initialize the audio player
initAudioPlayer();
