// Create your global variables below:
var trackList = ["Dream", "Soarin", "Myself", "Star ", "Why", "3:15", "Honest", "Mirror"];
// index of current song showing on player
var currentSong = 0
// volLevels holds the references to the divs
var volLevels = [];
// volColored keeps track of which volume levels are colored
var volColored = [];
// true if pause button is showing (music is playing), false if play button is showing
var isPlaying = false;
// reference of time tracker
const timeTracker = document.getElementById("time-track");
// current time of song playing
var val = parseInt(timeTracker.value);

function showClassifierDesc() {
	document.getElementById("review-desc").style.display = "block";
}
function showLinxDesc() {
	document.getElementById("linx-desc").style.display = "block";
}

  

init();