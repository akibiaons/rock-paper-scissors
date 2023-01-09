// Creating a variable with const and a function with getUserChoice so that the user can make selection of rock, paper, or scissors.


const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Error!');
    } 
   };
   
   
   function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
       return 'rock';
       break;
     case 1:
       return 'paper';
       break;
     case 2:
       return 'scissors';
       break;
    }
   };
   
   function determineWinner(userChoice, computerChoice) {
     if (userChoice === computerChoice) {
       return 'The game is a tie!';
     } if (userChoice === 'rock') { 
       if (computerChoice === 'paper') {
         return 'The computer won!';
       } else {
         return 'You won!';
       }
     } if (userChoice === 'paper') {
       if (computerChoice === 'scissors') {
         return 'The computer won!';
       } else {
         return 'You won!';
       }
     } if (userChoice === 'scissors') {
       if (computerChoice === 'rock') {
         return 'The computer won!';
         } else {
           return 'You won!';
         }
     } if (userChoice === 'bomb') {
       if (computerChoice === 'scissors') {
         return 'You win!';
       } if (userChoice === 'bomb') {
         if (computerChoice === 'rock') {
           return 'You win!';
         } if (userChoice === 'bomb') {
           if (computerChoice === 'paper') {
             return 'You win!';
           }
         }
       }
     }
   }
   
   //Below is the code suggested by Codecademy, refer to self written code and take note of the differences.
   const playGame = () => {
     const userChoice
   = getUserChoice('rock');
     const computerChoice = getComputerChoice();
     console.log('You threw: ' + userChoice);
     console.log('The computer threw: ' + computerChoice);
     console.log(determineWinner(userChoice, computerChoice));
   };
   
   playGame();


   //Below is the code I had originally written 
   /*
   ================================
   Code review:
   
   The codecademy suggested Javascript uses a shorthand version with the arrow function. They also used a const variable declaration. 
   ==================================================
   function playGame() {
     var userChoice = getUserChoice('rock');
     var computerChoice = getComputerChoice;
     console.log(getUserChoice);
     console.log(getComputerChoice);
   };
   */