console.log('Task # 1');

let sayHello = (myName) => {
  console.log('Hi ' + myName);
}

sayHello('Mel'); 

console.log('----------')
console.log('Task # 2')

let sayHello1 = (greet, myName) => {
  if (greet === 1){
    console.log('Hi, ' + myName);
  } else {
    console.log ('Hello, '+ myName);
  }
}

sayHello1(1,'Mel'); 

let sayHello2 = () => {
  console.log('Hi, Mel <3');
}

sayHello2(); 

let sayHello3 = name => 
  console.log('Hi, ' + name);

sayHello3('Mell'); 

console.log('----------')
console.log('Task # 3')


let sayHelloDefault = (myName = 'Mel', greet = 1) => {
  if (greet === 1){
    console.log('Hi, ' + myName);
  } else {
    console.log ('Hello, '+ myName);
  }
};

sayHelloDefault('Meli', 1); 
sayHelloDefault('Isa');
sayHelloDefault(); 

console.log('----------')
console.log('Task # 4');

// function checkInput(...cb){
//     let dataInput = () => 
//     { for (const num of cb){
//     console.log(num);
//     }}
//     if (cb != ''){dataInput()} else {console.log('NO DATA');
//     }
// }

// checkInput();

// checkInput('Name','List', 6);

function checkInput(cb, ...args) {
  let hasEmptyString = false;
  for (const text of args){
    console.log({ text });
    if (!text) {
      hasEmptyString = true;
      break;
    }
  }

  if (!hasEmptyString) {
    cb();
  }
}

console.log('CB First try');
const myCallback = () => {
  console.log('Callback executed!');
}
checkInput(
  myCallback,
  'Orange',
  'Pinneaple',
  'Banana',
  '',
);

console.log('CB Second try');
checkInput(() => console.log('Happy salad :D'), 'Orange', 'Pinneaple', 'Banana');

console.log('CB third try');
checkInput(() => console.log('Sad Salad ;D'), 'Orange', '', 'Pinneaple', 'Banana');


// MAX SOLUTION

// const sayHello = name => console.log('Hi ' + name);

// const sayHello2 = (name, phrase) => console.log(phrase + ' ' + name);
// const sayHello3 = () => console.log('Hi Hard-coded!');
// const sayHello4 = name => 'Hi ' + name;

// sayHello('Max');
// sayHello2('Max', 'Hello');
// sayHello3();
// console.log(sayHello4('Max'));

// const sayHello5 = (name, phrase = 'Hi') => console.log(phrase + ' ' + name);

// sayHello5('Manuel');
// sayHello5('Manuel', 'Hello');

// function checkInput(cb, ...strings) {
//   let hasEmptyText = false;
//   for (const text of strings) {
//     if (!text) {
//       hasEmptyText = true;
//       break;
//     }
//   }
//   if (!hasEmptyText) {
//     cb();
//   }
// }

// const cbFn = () => {
//   console.log('All not empty!');
// };


checkInput(cbFn
  ,
  'Hello',
  '12',
  'adsfa',
  'Not empty'
);
