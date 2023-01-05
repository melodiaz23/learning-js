const startGameBtn = document.getElementById('start-game-btn');

function startGame(){
    console.log('Game is starting...');
}

// startGame(); // Direct execution

startGameBtn.addEventListener('click', startGame); // Indirect execution

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
//     }
// };

// person.greet();
