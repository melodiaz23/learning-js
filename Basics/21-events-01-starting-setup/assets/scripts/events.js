const button = document.querySelector('button');

// Also not recomended...
// // button.onclick = function(){

// // } 

const buttonClickHandler = () => {
  alert('Button was clicked');
};

const anotherButtonClickHandler = () => {
  console.log('This was clicked!');
};

// button.onclick = buttonClickHandler; // We can onlt add one handler for this kind of event to the element. 
///////

// Recomended, because allow us to add multiply event listeners and we have a removeEventListerners();

button.addEventListener('click', buttonClickHandler);

setTimeout(() => {
  button.removeEventListener('click', buttonClickHandler);
}, 2000);

