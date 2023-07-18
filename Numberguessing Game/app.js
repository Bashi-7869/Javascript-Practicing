let randomNumber = parseInt((Math.random()*100)+1);
const submit = document.querySelector('#button');
const userInput = document.querySelector('#guessArea');
const previousGuess = document.querySelector('.previousGuess');
const remainingGuess = document.querySelector('.rmainingGuess');
const restart = document.querySelector('.restart');
const result = document.querySelector('.result');
const p = document.createElement('p');
let previousGuesses = [];
let numberofGuesses = 1;
let playGame = true;

if (playGame){
    button.addEventListener('click', (e) => {
        e.preventDefault();
      
    //taking input from user
      const guess = parseInt(userInput.value);
      userguessingDate(guess);
    });
 }

  function userguessingDate(guess){
     
    // showing alert messages to user if user wrong
    if (isNaN(guess)){
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than 1!');
    } else if (guess > 100){
        alert('Please enter a number less than 500!')
    } else {
         //recording the guesses the user attempted
        previousGuesses.push(guess);
    
         
      }
    }
  
     