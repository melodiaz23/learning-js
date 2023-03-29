//// SET

// // const ids = new Set([1, 2, 3]); // Passing any iterable...
// const ids = new Set(['Hi', 'From', 'Set!']);
// ids.add(2); // In a set the values will be unique. This will be ignore.
// console.log(ids.has(2)); // To get access we can access to another methods, with dot.
// ids.delete('Hi');
// console.log(ids);

// for (const entry of ids.entries()){ //.values() insted of entries, will return an iterable that only yields the set values once.
//   console.log(entry);
// }
// //if we want to go through all elements in a set. This return an iterable.

// MAP

const person1 = {name: 'Max'};
const person2 = {name: 'Manuel'};

const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]]);
// const personData = new Map([[100, person1]]);
personData.set(person2, [{date: 'two weeks ago', price: 100}]);
console.log(personData);
console.log(personData.get(person1));

for (const [key, value] of personData.entries()){ // This give us key and value in one array. 
  console.log(key, value);
}

for (const key of personData.keys()){ // Give us all the key values.
  console.log(key);
}

for (const key of personData.values()){ // Give us all the values.
  console.log(key);
}
