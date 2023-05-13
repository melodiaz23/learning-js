const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const anotherRandomNumber = Math.random(); 

let myNumber = randomNumber;
let numbersArray = [3, 4, 16, 20];

// Task # 1  
// This function will take "myNumber" variable 
// if the value is greater than "0,7" will display an alert with a message.
function alertMessage () {
    if (myNumber >= 0.7) {
        alert("You're right!");
    }
}

alertMessage();

console.log('recorrido ascendente'); 

// Task # 2 
// Loop for que para la variable "i". La inicializa en 0.
// mientras que "i" sea menor que "numbersArray.length"
// imprime en consola el valor de "i" y el valor que tiene
// el arreglo en la posición indicada por "i".
// Finalmente incrementa en 1 el valor de "i" en cada iteración.  
for (let i = 0; i < numbersArray.length; i++){
    console.log(i + ' => ' + numbersArray[i]);
}

console.log('------');


console.log('Iterar con for of')

// For of loop. Ejecuta el código por cada elemento en el array. 
for (const task of numbersArray){
    console.log(task);
}

console.log('-------');

// Task # 3
// Loop for para la variable "i". La inicializa en el último valor de "numbersArray"
// Mientras que "i" sea mayor que -1 imprime en consola el valor de "i"
// y el valor que tiene el arreglo en la posición indicada por "i".
// Finalmente, reduce en 1 el valor de "i".

console.log('Iterar con loop for to end to start')

for (let i = numbersArray.length - 1; i > -1 ; i--){
    console.log(i + ' => ' + numbersArray[i]);
}

console.log('-------');

// Task # 4
//Función que muestra una alerta si "randomNumber" y "anotherRandomNumber" es
// superior a 0.7 ó sí al menos uno de los dos no es superior a 0.2.
// Task is : Create another random number (in a separate constant) 
// and show an alert in two different scenarios: Both are greater 0.7 OR
//  at least one of the two is NOT greater than 0.2.
function randomNumbers(){
    console.log(randomNumber)
    console.log(anotherRandomNumber)
    if (randomNumber > 0.7 && anotherRandomNumber > 0.7){
        alert('Both numbers are greater than 0.7');
    } 
    if (randomNumber < 0.2 || anotherRandomNumber < 0.2){
        alert('One of both numbers are not greater than 0.2');
    }
    }
    
randomNumbers();