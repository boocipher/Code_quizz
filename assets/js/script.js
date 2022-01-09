
// Timer for 90 sec
var timerEl = document.getElementById('countdown');
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');

// Timer that counts down from 5
function countdown() {
    var timeLeft = 90;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        displayMessage();
      }
    }, 1000);
  }

  countdown();

// eventlistener
    // hide div
    // show 2nd div
    // starts timer


// calls f to render Qs
// Q + 4 clickable options /buttons w value (text of A) attribute
// eventlistener for button click to return the value

// hide / show div in css
