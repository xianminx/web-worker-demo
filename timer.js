// timer.js

// Get the element where you want to display the current time
var currentTimeElement = document.getElementById("current-time");
var updateInterval;

// Create a new Worker instance with the worker.js file
var worker = new Worker("worker.js");

// Listen for messages from the worker
worker.onmessage = function (event) {
  currentTimeElement.textContent = event.data;
};

// Get the start and stop buttons
var startButton = document.getElementById("start-button");
var stopButton = document.getElementById("stop-button");

// Add event listener to start button
startButton.addEventListener("click", function () {
  worker.postMessage("start");
});

// Add event listener to stop button
stopButton.addEventListener("click", function () {
  worker.postMessage("stop");
});
