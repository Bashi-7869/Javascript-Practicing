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
         //Checking after 10 guesses game is over or not
         if (numberofGuesses === 11){
              displayGuesses(guess);
              displayMessage(`Game Over! Number was ${randomNumber}`);
              endGame();
            } else {
               //showing previous guessed numbers to users
              displayGuesses(guess);
               //Checking guess and showing user if wrong
              checkingGuess(guess);
            } 
        }
    }
         
   function checkingGuess(guess){
        if (guess === randomNumber){
            displayMessage(`You guessed correctly! <br> Congratulation`);
            endGame();
        } else if (guess < randomNumber) {
            displayMessage(`Too low! Try again!`);
        } else if (guess > randomNumber) {
            displayMessage(`Too High! Try again!`);
        }
    }
    function displayGuesses(guess){
        userInput.value = '';
        previousGuess.innerHTML += `${guess}  `;
        numberofGuesses++
        remainingGuess.innerHTML = `${11 - numberofGuesses}  `;
    }
    //  dissplaying messages to user
    function displayMessage(message){
        result.innerHTML = `<h1>${message}</h1>`
    }
    
    function endGame(){
        //Clear user input
        userInput.value = ''; 
        //Disable user input button
        userInput.setAttribute('disabled', '');
        //Display Start new Game Button
              p.classList.add('button');
              p.innerHTML = `<h1 id="newGame">Start New Game</h1>`
        restart.appendChild(p);
        playGame = false;
        newGame();
    }
    
   