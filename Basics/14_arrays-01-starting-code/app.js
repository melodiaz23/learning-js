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
const prices = [10.99, 5.99, 3.99, 6.59]
const tax = 0.19;
// const taxAdjustedPrices = [];

const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)}
  return priceObj; // This has to return something. Return a BRAND NEW array. 
});
console.log(prices, taxAdjustedPrices); 

