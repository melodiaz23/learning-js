const h1 = document.getElementById('main-title');

h1.textContent = 'Some new tittle!';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (Changed!)';


// const listItemElements = document.querySelectorAll('li') // A way to select multiple elements
// This take a snapshot
//or we can also use:
const listItemElements = document.getElementsByTagName('li'); // Live list. 

for (const listItemEl of listItemElements){
  console.dir(listItemEl);
}

// E.g...
// const myElements = document.getElementsByTagName('div');

// console.log(myElements.length);

// document.querySelector('body').appendChild(document.createElement('div'));

// console.log(myElements.length);

// console.log('///////');

// const elemsQ = document.querySelectorAll('div');

// document.querySelector('body').appendChild(document.createElement('div'));

// console.log(myElements.length);
// console.log(elemsQ.length);