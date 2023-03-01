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

