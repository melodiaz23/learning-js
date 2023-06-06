function Logger(logString: string){// DECORATOR FACTORIES FUNCTION
  console.log('logger factory')
  return function(constructor: Function){
  console.log(logString);
  console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string){
  console.log('template factory')
  return function(constructor: any){
    console.log('rendering template')
    const hookEl = document.getElementById(hookId)!;
    const p = new constructor();
    hookEl.innerHTML = template;
    hookEl.querySelector('h1')!.textContent = p.name;
  }
}

// @Logger('LOGGING - PERSON')
@Logger('LOGGING')
@WithTemplate('<h1>My person object</h1>', 'app')
class Person {
  name = 'Mel';

  constructor(){
    console.log('creating person object...');
  }
}

const pers = new Person();

console.log(pers);