function Logger(logString: string){// DECORATOR FACTORIES FUNCTION
  return function(constructor: Function){
  console.log(logString);
  console.log(constructor);
  };
}

@Logger('LOGGING - PERSON')
class Person {
  name = 'Max';

  constructor(){
    console.log('creating person object...');
  }
}

const pers = new Person();

console.log(pers);