const task3Element = document.getElementById('task-3');

function helloText(){
    alert('Hola Mundo');
}

function nombre(name){
    alert('Hola ' + name);
} 

function fourTask(lime, apple, orange){
    const combinedText = lime + apple + orange
    return combinedText
}

helloText();
nombre('Mely');

task3Element.addEventListener('click', helloText);

alert(fourTask('1 lime', ', 2 apples', ' and 3 oranges'));
