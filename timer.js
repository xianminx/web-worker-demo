


// Get the element where you want to display the current time
var currentTimeElement = document.getElementById("current-time");
var updateInterval;
// Function to update the current time
function updateCurrentTime() {
  var currentTime = new Date();
  var options = { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit", fractionalSecondDigits: 3 };
  currentTimeElement.textContent = currentTime.toLocaleTimeString(currentTime, options);
}

function startUpdateTime() {
  updateCurrentTime(); // Update the current time immediately
  // Update the current time every second
  if (updateInterval) {
    return; // Return early if an update is already in progress
  }
  updateInterval = setInterval(updateCurrentTime, 1);
  console.log("Time update started");
}

function stopUpdateTime() {
  if (!updateInterval) {
    return; // Return early if an update is already in progress
  }
  clearInterval(updateInterval);
  updateInterval = null; // Reset the updateInterval variable
  console.log("Time update stopped");
}


// Call the startUpdateTime function to begin updating the time
startUpdateTime();

function updateUI() {
  // code to update the UI
}


// Get the start and stop buttons
var startButton = document.getElementById("start-button");
var stopButton = document.getElementById("stop-button");

// Add event listener to start button
startButton.addEventListener("click", startUpdateTime);

// Add event listener to stop button
stopButton.addEventListener("click", stopUpdateTime);
