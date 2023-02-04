// TASK # 1

const task1 = document.querySelector('#task-1')
const optionTask1 = document.getElementById('task-1')
const option3task1 = document.querySelectorAll('li')[0]

console.log(task1);
console.log(optionTask1);
console.log(option3task1);

task1.style.color='green';
optionTask1.style.backgroundColor='yellow';

// TASK # 2

const task2 = document.querySelector('title')
const optionTask2 = document.querySelectorAll('title')[0]

// Other option...(MAX)
const docTitle2 = document.head.querySelector('title');

console.log(task2);
console.log(optionTask2);
console.log(docTitle2);

task2.innerHTML = 'Assignment - Solved!'
// optionTask2.textContent = 'Assignment - Solved!!!'

// TASK # 3 

const h1 = document.querySelector('h1') 
h1.innerHTML = 'Assignment - Solved!'

// Other option... (MAX)

// const h1 = document.getElementsByTagName('h1');
// h1[0].textContent = 'Assigment Solved!!!'