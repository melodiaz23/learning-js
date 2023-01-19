console.log('Task # 1');

let sayHello = myName => {
  console.log('Hi ' + myName);
}

sayHello('Mel'); 

console.log('----------')
console.log('Task # 2')

let sayHelloTwo = (greet, myName) => {
  if (greet === 1){
    console.log('Hi, ' + myName);
  } else {
    console.log ('Hello, '+ myName);
  }
}

sayHelloTwo(1,'Mel'); 

let sayHelloThree = () => {
  console.log('Hi, Mel <3')
}

sayHelloThree(); 

let sayHelloFour = name => 
  console.log('Hi, ' + name);

sayHelloFour('Mell'); 

console.log('----------')
console.log('Task # 3')


let sayHelloDefault = (myName, greet = 'Hello') => {
  if (greet === 1){
    console.log('Hi, ' + myName);
  } else {
    console.log ('Hello, '+ myName);
  }
}
sayHelloDefault('Mel', 1); 
sayHelloDefault('Mel'); 

console.log('----------')
console.log('Task # 4');

function checkInput(...cb){
    let dataInput = () => 
    { for (const num of cb){
    console.log(num);
    }}
    if (cb != ''){dataInput()} else {console.log('NO DATA');
    }
}

checkInput();

checkInput('Name','List', 6);

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

// checkInput(
//   () => {
//     console.log('All not empty!');
//   },
//   'Hello',
//   '12',
//   'adsfa',
//   'Not empty'
// );
