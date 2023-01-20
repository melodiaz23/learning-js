const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK'; //Typos
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';


let gameIsRunning = false
let answer

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`,'').toUpperCase(); // Template literal
    // Backtick shourcout [option] + 
    //.toUpperCase to convert the string the user entered to all capital case.
    if (selection !== ROCK &&
    selection !== PAPER && 
    selection !== SCISSORS){
    alert(`Invalid choice! we chose ${DEFAULT_USER_CHOICE} for you.`);
    return; // This will return undefined
    }
    return selection;
    };

const getComputerChoice = () => {
    const randomValue = Math.random() //Math is a globally available object 
    // and it has a random method that generates a random number between 0 and 1.
    if (randomValue < 0.34){
        return ROCK;
    } else if (randomValue < 0.67){
        return PAPER
    } else {
        return SCISSORS;
    }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => // Arrow function
    cChoice === pChoice //Ternary expression
    ? RESULT_DRAW // If that's truth, return 'DRAW'
    :    (cChoice === ROCK && pChoice === SCISSORS) || //Else case. 
        (cChoice === SCISSORS && pChoice === PAPER) ||
        (cChoice === PAPER && pChoice === ROCK) 
    ? RESULT_COMPUTER_WINS // In the case that this condition is me, the result is 'COMPUTER WINS'
    : RESULT_PLAYER_WINS; // Else case. If the last condition is false, then return 'RESULT PLAYES WINS'
    // If we have and arrow function and we just have ONE expression in it, we can omit
    // the curly braces, and omit the return keyword.
    
    // const getWinner = (cChoice, pChoice) =>{
    // if (cChoice === pChoice){
    //     console.log(RESULT_DRAW);
    //     return RESULT_DRAW;
    // } else if (cChoice === ROCK && pChoice === SCISSORS || 
    //     cChoice === SCISSORS && pChoice === PAPER ||
    //     cChoice === PAPER && pChoice === ROCK ){
    //     console.log(RESULT_COMPUTER_WINS);
    //     return RESULT_COMPUTER_WINS;
    // }
    // else {
    //     console.log(RESULT_PLAYER_WINS);
    //     return RESULT_PLAYER_WINS;
    // }}


startGameBtn.addEventListener('click', () => { //This function is an argument.
    if (gameIsRunning){ //It makes a boolean. If gameIsRunning is true...
        return
    }
    gameIsRunning = true
    console.log('Game is starting...');
    const playerSelection = getPlayerChoice(); //Might be undifine
    const computerChoice = getComputerChoice();
    let winner;
    if (playerSelection){
        winner = getWinner(computerChoice, playerSelection);
    } else {
        winner = getWinner(computerChoice)
    }
    console.log(`Player Selection: ${playerSelection}`);
    console.log(`Computer Choice: ${computerChoice}`);
    let message = `You picked ${playerSelection || DEFAULT_USER_CHOICE}, computer picked ${computerChoice} therefore you `;
    if (winner === RESULT_DRAW){
        message = message + 'have a DRAW.';
    } else if (winner === RESULT_PLAYER_WINS){
        message = message + 'WON.'
    } else {
        message = message + 'LOST.';
    }
    console.log(winner);
    alert(message); // This will show the user that the game is over
    // and we have a draw,, won or lost.
    gameIsRunning = false;
}); 

// const start = function() { // Anonymous function
//     console.log('Game is starting...');
// }
// startGame(); // Direct execution


//'addEventListener' is a function provided by the browser. We call it on the 'startGameBtn'
// To acces to a property of an object, we use dot notation.
// We can store a function in an object, this is called method
// (a function attached to an object).
// In that case, we could say that even listener therefore is a method.
// e.g:
// const person = {
//     name: 'Isa',
//     greet: function mel(){
//         console.log('Hello ' + person.name)
//     } //We create a function on the ride side of an assigment operator
// };

// person.greet();}

// Funtion are objects:
// console.log(typeof startGame); //Typeof to find out what the type of is some array, number and so on.
// console.dir(startGame) // Dir give us a different insight into objects.

// Not related to game
// Wherever we donn't know how many parameters/arguments will have the function.  
const combine = (resultHandler, operation, ...numbers) =>  { // Rest operator. 
    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number // If number isNaN, replace with 0. 
        // Otherwise keep it.
    };
    let sum = 0;
    for (const num of numbers){ // For of loop
        if (operation === 'ADD'){
            sum += validateNumber(num); // add each num to the sum.
        } else {
            sum -= validateNumber(num);
        }
    }
    resultHandler(sum, 'The result after adding all numbers is'); // ????????
    // I DON'T GET IT HOW resultHandler
    // is a funtion, i just see it like a parameter.
    // How sum is result????
};

// const subtractUp = function (resultHandler, ...numbers){
//     let sub = 0;
//     for (const num of numbers){ // For of loop
//         sub -= num // substract each num to the sub.
//     }
//     resultHandler(sub, 'The result after subtracting all numbers is');
// };

// Same with arguments thing.
// const subtractUp = function (resultHandler){
//     let sub = 0;
//     for (const num of arguments){ // For of loop
//         // Arguments is a keyword, it's built into javascript.
//         // We can use it inside of functions that use the function keyword (function())
//         sub -= num // substract each num to the sub.
//     }
//     resultHandler(sub);
// };

const showResult = (messageText, result) => {
    alert(messageText + ' ' + result);
}; // ??? How showResult is relatable to resultHandler?

combine(showResult.bind(this, 'The result after adding all numbers is'), 'ADD', 1, 5, 'nsshjsh', -3, 6, 10); 
combine(showResult.bind(this, 'The result after adding all numbers is'), 'ADD', 1, 5, 10, -3, 6, 10, 25, 88);
combine(showResult.bind(this, 'The result after subtracting all numbers is'), 'SUBTRACT', 1, 10, 15, 20);
// HOW I CAN PUT THIS IN A MORE READEBLE WAY.