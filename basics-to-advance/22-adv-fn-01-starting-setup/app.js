// Example for pure function

function add(num1, num2){
  return num1 + num2; 
}

console.log(add(1, 5)); // 6
console.log(add(12, 15)); // 27

// Example for inpure function

function addRamdom(num1){
  return num1 + Math.random();
}

console.log(addRamdom(5));

let previousResult = 0;

function addMoreNumbers(num1, num2){
  const sum = num1 + num2; 
  previousResult = sum // this produce a side effect
  return sum; 
}

addMoreNumbers(1, 5);
console.log(previousResult);

const hobbies = ['sports', 'cooking'];

function printHobbies(h){
  h.push('new hobbuy'); 
  console.log(h)
}

printHobbies(hobbies);

// Factory functions

let multiplier = 1.1;

function createTaxCalc(tax){
  console.log(multiplier); // 1.1
  function calculateTax(amount){
    console.log(`This is a new multiplier ${multiplier}`); // 1.2
    return amount * tax
  }

  return calculateTax;

}

const calculateVatAmount = createTaxCalc(0.19);
const calculateIncomeTaxAmount = createTaxCalc(0.25)

// const varAmount = calculateTax(100, 0.19);
// const incomeTax = calculateTax(100, 0.25);

multiplier = 1.2; // Multiplier changes here, before the inner function is call. 

console.log(calculateVatAmount(100));
console.log(calculateIncomeTaxAmount(100));

let userName = 'Max';

function greetUser(){
  // let name = 'Anna'
  console.log('Hi ' + name);
}

let name = 'Maximilian';

userName = 'Manuel';

greetUser()

// Recursion

// function powerOf(x, n){
//   let result = 1; 

//   for (let i = 0; i < n; i++){
//     result *= x;
//   }
//   return result;
// }

// With recursion the code above we can make it in another way, like this:

function powerOf(x, n){

  // if (n === 1){
  //   return x;
  // } // This way, we don't generate an infinite loop.

  // return x * powerOf(x, n-1);
// Also we can do it with a ternary expression like: 
return n === 1 ? x : x * powerOf(x, n-1);

}

console.log(powerOf(2, 3)); // 2 * 2 * 2 

const myself = {
  name: 'Max', 
  friends: [
    {
      name: 'Manuel', 
      friends: [
        {
          name: 'Chris'
        }
      ]
    }, 
    {
      name: 'Julia'
    }
  ]
}

function getFriendNames(person){
  const collectedNames = [];

  if(!person.friends) { 
    return [];
  }

  for (const friend of person.friends){
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }

  // for (const friend of person.friends){
  //   collecterNames.push(friend.name);
  // }
  return collectedNames;
}

console.log(getFriendNames(myself));