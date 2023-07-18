// worker.js

var updateInterval;
function updateCurrentTime() {
    var currentTime = new Date();
    var options = { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit", fractionalSecondDigits: 3 };
    postMessage(currentTime.toLocaleTimeString(currentTime, options));
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

// worker.js
// ...

self.onmessage = function(event) {
    if (event.data === "start") {
      startUpdateTime();
    } else if (event.data === "stop") {
      stopUpdateTime();
    }
  };
