// let myName = 'Meli';
// let hobbies

// if (myName === 'Meli'){
//     hobbies = ['Sports', 'Cooking']
//     console.log(hobbies);
// }

// function greet (){
//     let age = 30
//     let myName = 'Max'; // We can re-declared the variable name in a function, becauese it is inside the function.
//     console.log(myName, age, hobbies);
// }

// console.log(myName);

// greet();

// let userName = 'Max';
// userName = 'Mel';

// console.log(userName);

function getName(){
    return prompt ('Your name ','');
}

function greet(){
    const userName = getName()
    console.log('Hello ' + userName);
}

greet(); 