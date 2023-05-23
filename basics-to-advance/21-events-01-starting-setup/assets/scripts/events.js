const button = document.querySelector('button');

// Also not recomended...
// // button.onclick = function(){

// // } 

const buttonClickHandler = event => {
  // event.target.disabled = true;
  console.log(event);
};

const anotherButtonClickHandler = () => {
  console.log('This was clicked!');
};

// button.onclick = buttonClickHandler; // We can onlt add one handler for this kind of event to the element. 
///////

// Recomended, because allow us to add multiply event listeners and we have a removeEventListerners();

// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler);
// }, 2000);


// buttons.forEach(btn => {
//   btn.addEventListener('mouseenter', buttonClickHandler);
// });

// window.addEventListener('scroll', event => {
//   console.log(event);
// })

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event);
})

const div = document.querySelector('div');

// To demostrate the execution of an event. Bumbbling phase (inside to outside);

div.addEventListener('click', event => {
  console.log('CLICKED DIV')
  console.log(event);
})

button.addEventListener('click', event => {
  event.stopPropagation();
  // event.stopImmediatePropagation(); // If we have multiple event listeners on the same element.
  console.log('CLICKED BUTTON')
  console.log(event);
  console.log(this);
})

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItems.forEach( listItem => {
//   listItem.addEventListener('click', (event) => {
//     event.target.classList.toggle('highlight');
//   })
// })

// ALTERNATIVE TO THE CODE ABOVE

list.addEventListener('click', function(event) {
    // event.target.classList.toggle('highlight'); // Event delegation pattern.
    event.target.closest('li').classList.toggle('highlight');
    // form.submit();
    button.click();
    console.log(this);
});



