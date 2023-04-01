const movieList = document.getElementById('movie-list');

movieList.style.backgroundColor = 'red';
movieList.style.display = 'block'

const userChoosenKeyName = 'level';

let person = {
  name: 'Max', 
  'second name': 'E.', // If the name of the keys has to words
  age: 30, 
  hobbies: ['sports', 'cooking'],
  [userChoosenKeyName]: '...',
  greet: function(){
    alert('Hi there');
  }
}

delete person.age; // To delete the age property to the person object
person.isAdmin = true; // That way we create a new property. 

const keyName = 'second name'

console.log(person[keyName]);

// person.greet();