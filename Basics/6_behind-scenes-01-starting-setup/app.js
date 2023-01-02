var myName = 'Meli';

if (myName === 'Meli'){
    let hobbies = ['Sports', 'Cooking']
    console.log(hobbies);
}

function greet (){
    var age = 30
    var myName = 'Max'; // We can re-declared the variable name in a function, becauese it is inside the function.
    console.log(myName, age, hobbies);
}

console.log(myName, hobbies);

greet();