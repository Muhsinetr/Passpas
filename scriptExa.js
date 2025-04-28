// function startTimer(val){

//     let seconds = 0;
//     const timerElement = document.querySelector('.timer');
//     const timerbtn = document.querySelector('.timeBtn');
//     let isRed = false
    
//     // Update the timer every second
//     const timer = setInterval(() => {
//         seconds++;
        
//         // Calculate minutes and seconds
//         const mins = Math.floor(seconds / 60);
//         const secs = seconds % 60;

//         if (seconds % 5 === 0) {
//             if (isRed) {
//                 timerElement.style.color = 'red';
//               } else {
//                 timerElement.style.color = '#13bf00';
//               }
//               isRed = !isRed;
    
//         }
//         if(val == 'stope'){
//             clearInterval(timer);
//             timerElement.innerText = '00:00';
//         }
        
//         // Display with leading zeros
//         timerElement.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;


//     }, 1000);
//     timerbtn.disabled = true;

// }

// DOM elements
const displayF = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

// Timer variables
let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;
let lastColorChangeTime = 0;

// Format time as MM:SS
function formatTime(milliseconds) {
    let totalSeconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    return [
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0')
    ].join(':');
}

// Update the display and handle color changes
function updateDisplay() {
    const currentTime = Math.floor(elapsedTime / 1000);
    displayF.textContent = formatTime(elapsedTime);
    
    // Change color every 5 seconds
    if (currentTime % 5 === 0 && currentTime !== lastColorChangeTime) {
        lastColorChangeTime = currentTime;
        displayF.style.color = displayF.style.color === 'red' ? '#03d91f' : 'red';
        navigator.vibrate(300);
    }
}

// Start the timer
function startTimer() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(function() {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 100);
        isRunning = true;
        startBtn.disabled = true;
        stopBtn.disabled = false;
    }
}

// Stop the timer
function stopTimer() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
}

// Reset the timer
function resetTimer() {
    stopTimer();
    elapsedTime = 0;
    lastColorChangeTime = 0;
    displayF.style.color = 'red'; // Reset to red
    updateDisplay();
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

// Event listeners
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
stopBtn.disabled = true; // Disable stop button initially
resetBtn.addEventListener('click', resetTimer);

// Initialize display
updateDisplay();