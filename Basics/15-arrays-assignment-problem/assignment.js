// ASSIGMENT 

// Task # 1

let numbers = [5, 16, 2, 10, 3];

const filteredNumbers = numbers.filter(number => number > 5);

console.log(filteredNumbers);

const numbersObj = numbers.map((number) => {
  let num = {num: number}
  return num;
}) 

console.log(numbersObj);

const multiply = numbers.reduce((prevValue, curValue) => {
  return prevValue * curValue
}, 1);

console.log(multiply);

// TASK # 2;

let findMax = (num) => {
  let largest = num.reduce((prevValue, curValue) => {
    return Math.max(prevValue, curValue);
  }, 0);
  console.log(largest);
};

findMax(numbers);

// MAX SOLUTION

// function findMax(...nums) {
//   let curMax = nums[0];
//   for (const num of nums) {
//     if (num > curMax) {
//       curMax = num;
//     }
//   }
//   return curMax;
// }

// console.log(findMax(...numbers));

// TASK 3;

let maxArray = [];

let findMax2 = (num) => {
  let largest = num.reduce((prevValue, curValue) => {
    return Math.max(prevValue, curValue);
  });
  maxArray.push(largest)
  let smallest = num.reduce((prevValue, curValue) =>{
    return Math.min(prevValue, curValue);
  })
  maxArray.push(smallest)

  console.log(`The maximun value is: ${largest} and the minimun value is: ${smallest}`);

  console.log(maxArray);

  let max = maxArray.slice(0, 1);
  let min = maxArray.slice(1);
  console.log(max, min);

};

findMax2(numbers);

// TASK 4;

let uniqueNumberlist = new Set ([]);

let addingNumbers = () => {
  let number = Math.floor(Math.random() * 10);
  console.log(`The random number is ${number}`);
  uniqueNumberlist.add(number)
}

while (uniqueNumberlist.size < 10) {
  addingNumbers();
}

console.log(uniqueNumberlist);
