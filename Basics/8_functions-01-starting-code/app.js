const startGameBtn = document.getElementById('start-game-btn');


const start = function() {
    console.log('Game is starting...');
}


// startGame(); // Direct execution

startGameBtn.addEventListener('click', start); // Indirect execution

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

// person.greet();

// Funtion are objects:
// console.log(typeof startGame); //Typeof to find out what the type of is some array, number and so on.
// console.dir(startGame) // Dir give us a different insight into objects.




