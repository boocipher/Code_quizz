
var timerEl = document.getElementById('countdown');
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');

// Timer that counts down from 45
function countdown() {
    var timeLeft = 45;
  
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

  var

// eventlistener
    // hide div
    // show 2nd div
    // starts timer


// calls f to render Qs
// Q + 4 clickable options /buttons w value (text of A) attribute
// Questions template courtesy of https://www.codingnepalweb.com/quiz-app-with-timer-javascript/

var question = document.querySelector('quizQuestion');
var choices = array.from(document.querySelectorAll('.choice-text'));

var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var availableQuestions = [];

var questions = [
    {
    // numb: 1,
    question: "What does HTML stand for?",
      choice1: "Hyper Text Preprocessor",
      choice2: "Hyper Text Markup Language",
      choice3: "Hyper Text Multiple Language",
      choice4: "Hyper Tool Multi Language",
      answer: 2,
    ]
  },
    {
    // numb: 2,
    question: "What does CSS stand for?",
    // answer: "Cascading Style Sheet",
    // options: [
      choice1: "Common Style Sheet",
      choice2: "Colorful Style Sheet",
      choice3: "Computer Style Sheet",
      choice4: "Cascading Style Sheet",
      answer: 4,
    // ]
  },
    {
    // numb: 3,
    question: "What does PHP stand for?",
    // answer: "Hypertext Preprocessor",
    // options: [
      choice1: "Hypertext Preprocessor",
      choice2: "Hypertext Programming",
      choice3: "Hypertext Preprogramming",
      choice4: "Hometext Preprocessor",
      answer: 1,
    // ]
  },
    {
    // numb: 4,
    question: "What does SQL stand for?",
    // answer: "Structured Query Language",
    // options: [
        choice1: "Stylish Question Language",
        choice2: "Stylesheet Query Language",
        choice3: "Statement Question Language",
        choice4: "Structured Query Language",
        answer: 4,
    // ]
  },
    {
    // numb: 5,
    question: "What does XML stand for?",
    // answer: "eXtensible Markup Language",
    // options: [
        choice1: "eXtensible Markup Language",
        choice2: "eXecutable Multiple Language",
        choice3: "eXTra Multi-Program Language",
        choice4: "eXamine Multiple Language",
        answer: 1,
    // ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value series like 1,2,3,5,6,7,8,9.....
  //   {
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];

// eventlistener for button click to return the value

// hide / show div in css
