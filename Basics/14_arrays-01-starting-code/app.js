// const numbers = [1, 2, 3]; // Most common way of creating an array.
// console.log(numbers);

// // const moreNumbers = new Array('Hi!', 'Welcome'); //Builds a new array. Equal to []
// // console.log(moreNumbers);
// // // If we use new Array(5); it will be create an array with 5 empty spaces. 
// // // We also can ommit the word 'new'. And it will work, anyway.

// // const yetMorenumbers = Array.of(1, 2);
// // console.log(yetMorenumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems); // NodeList

// const moreNumbers = Array.from('12'); // Allow us to convert an iterable or an array-like object wich isn't and array yet to an array.
// console.log(moreNumbers);
// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems); // Real array 

// const hobbies = ['cooking', 'sports']; // Same types of data
// const personalData = [30, 'Mel', {moreDetail: []}]; // Mix of data

// const analyticsData = [[1, 1.6], [-5.4, 2.1]]; // Nested array 
// // Multidimensional array are possible too.

// for (const data of analyticsData){
//   for (const dataPoints of data){
//     console.log(dataPoints);
//   }
// }

// console.log(personalData[1]);

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');
// hobbies.unshift('Coding'); // Add item to the beggining
// const poppedValue = hobbies.pop();
// hobbies.shift(); // Remove item to the beggining
// console.log(hobbies);

// //Or if we want to add items or manipulate it in different places of an array:
// hobbies[1] = 'Coding';
// console.log(hobbies);

// //Splice method for adding something between 2 elements
// hobbies.splice(1, 0, 'Good food'); // 1 for item 2 (start to looking in that index) and 0 because we are not going to delete anything. 'Good food'is the string to add... could be more than one.
// console.log(hobbies);

// // Splice for deleting
// const removedElements = hobbies.splice(0, 1); // Splice return de remove element.
// console.log(hobbies);
// // If we put a negative index (-1, -2...) it looks to the end of the  array and look from the right. If we put -1 it will delete the last item.

// //OTHER METHODS
// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10]

// console.log(testResults.slice()); // It return a brand new array, so is a way of copie an array.

// //Other use of array... 
// // It help us to selecting ranges of an array.
// const storedResults = testResults.slice(0, 2) // With this we specify a start and an end number. This give us an array. In this case: 0 - Starting index and 2 - final index without including the index 2
// const negativIndex = testResults.slice(-3, -1) // It also works. the starting point will be the -3 item of the array right to left and the last item will be the -1 (not imcluded). 
// const oneIndex = testResults.slice(2) // Select elements on the array, since the number of index specify and select every element up to the end.

// // Add elements to an array and return a new array -> concat()
// const storedResults2 = testResults.concat([3.99, 2]); // Return a new array combining an existing array
// testResults.push(5.91); // Push add a new element to the array. 

// //To look for the index of one element in the array. .indexOf()
// console.log(testResults.indexOf(1.5)) // It returns the first index of the value we are passing. If we add a second argument, this will be the index will be looking for. 
// console.log(testResults.lastIndexOf(1.5)); // This start looking for the value, right to left.
// // It only works with primitive values, no with reference values. In that case, we have other method:

// const personData = [{name: 'Max'}, {name: 'Manuel'}];

// const manuel = personData.find((person, idx, persons) => { // It returns the same object that is in the array. Find does not create a copy. It works with the reference value. This means that if we manipulate 'manuel' in this case, this gonna change on personData too.
//   return person.name === 'Manuel'; // It gonna return the first match.
// }); 

// const maxIndex = personData.findIndex((person, idx, persons) => {
//   return person.name === 'Max'; // This gonna return the index.
// });

// // Also we have: 
// console.log(testResults.includes(10.99)); // For primitive values. This will return true or false is it is on the array or not.

// Other method...

// const prices = [10.99, 5.99, 3.99, 6.59]
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // Insted this: 
// // for (const price of prices){
// //   taxAdjustedPrices.push(price * (1 + tax));
// // }
// // With this method we can't now the index, we need to do it manually. 
// // We also can use forEach method
// prices.forEach((price, idx, prices) => {
//   const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)}
//   taxAdjustedPrices.push(priceObj);
// });
// console.log(taxAdjustedPrices); 

// Theres another method: map();
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
// const taxAdjustedPrices = [];

const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)}
  return priceObj; // This has to return something. Return a BRAND NEW array. 
});
// console.log(prices, taxAdjustedPrices); 

// This method convert everything to a array. 
const sortedPrices = prices.sort((a, b) => { // This logic will organize all the array. It will depend of the kind of data we want to sort.
  if (a > b){
    return 1;
  } else if (a === b){
    return 0;
  } else {
    return -1;
  }
}); 
console.log(sortedPrices.reverse()); // Reverse the array.

// If we want to reduce the amount of elements of the array based on a filter: 

// const filteredArray = prices.filter((price, idx, prices) => {
//   return price > 6; // If any item is greater than 6, it will be added to the array.
// }); //Filter expected a value: true or false.

// console.log(filteredArray);

// Another shorter way with arrow function: 
const filteredArray = prices.filter(price => price > 6); 
console.log(filteredArray);

// Reduce method(); -> Reduce an array to a simple value.


const sum = prices.reduce((prevValue, curValue, idx, prices) => {
  return prevValue + curValue;
}, 0); // Reduce take a function, with some arguments like: Previous value -initial value and, after first execution will hold the value of the previous execution-, current value -first element of the array-, current index (optional), and the original array. AND the second argument we pass to reduce is the initial value wich we want to start.

// => SHORTER WAY:
// const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);

console.log(sum);

const data = 'new york;19.99;2000';
const transformedData = data.split(';') // As argument we specify the separator
transformedData[1] = +transformedData[1] //To transform into a number.
console.log(transformedData);

const nameFragments = ['Max', 'Schwarz'];
const name = nameFragments.join(' ') //By default is separeted by a comma. But if we want a space we just need to put an empty string as an argument.
console.log(name);

////////
// The spread operator
const copiedNameFragments = [...nameFragments]; // This pull out all the elements of the nameFragments array, and add them as individual elements. This will be a new array with the values of an old array.
nameFragments.push('Mr');
console.log(nameFragments, copiedNameFragments); // The log will be different.

console.log(Math.min(...prices)); // Math.min takes values and return the smallest. It only works with number, so if we have an array we will need the spread operator.

const persons = [{name: 'Max', age: 30}, {name : 'Manuel', age: 31}];
// const copiedPersons = [... persons];
const copiedPersons = persons.map(person => ({
  name: person.name, 
  age: person.age
}));
persons.push({name : 'Anna', age: 29});
persons[0].age = 31;
console.log(persons, copiedPersons) // If we change the age value it is also reflected on copiedPersons.
// it is because we only copy these addresses and create a new array, not a new object. If we dont want want it, we use map.









////////////////////////////
// Proffesor steve, example: 

// let dwarves = ['Grumpy', 'Sneezy', 'Happy', 'Bashful', 'Doc', 'Dopey', 'Sleepy'];

// let name1 = 'Peter Dinklage';
// let name2 = 'Kenny Baker';
// let name3 = 'Happy';

// let names = [].concat(name1, name2, name3);
// console.log(names)

// let nameVal = names.forEach((name, idx) => {
//  console.log(`${idx} => ${dwarves.includes(name)}`);
//  if (dwarves.includes(name)){
//   console.log(`${name} is included`)
//  } else {
//   console.log(`${name} is NOT included`)}
// });