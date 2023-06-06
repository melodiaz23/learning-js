// class User {
//   name: string;
//   private age: number;

//   constructor(name: string, age: number){
//     this.name = name;
//     this.age = age;
//   }
// }

interface Greetable {
  name: string;
}

interface Printable {
  print(): void;
}

class User implements Greetable{
  constructor(public name: string,  private age: number){}

  print(){
    console.log(this.name);
  }

}

class Admin extends User {
  constructor( name: string, age: number, private permissions: string[]) {
    super(name, age);
  }
}

const user = new User('Max', 30);
console.log(user.name);

const num1Input = document.getElementById('num1') as HTMLInputElement;
const num2Input = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!;


function add(a: number, b: number){
  return a + b
}

interface CalculationContainer {
  res: number; 
  print(): void;
}

type PrintMode = 'console' | 'alert'; // Union types
enum OutputMode { CONSOLE, ALERT };

function printResult(result: string | number, printMode: OutputMode) {
  if (printMode === OutputMode.CONSOLE){
    console.log(result)
  } else if (printMode === OutputMode.ALERT){
    alert(result);
  }
}

// const result = add(5, 3);

// printResult(result);

type CalculationResults = CalculationContainer[];

const results: CalculationResults = [];

const names = ['Max'];

buttonElement.addEventListener('click', () => {
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  const result = add(num1, num2);
  const resultContainer = {
    res: result,
    print(){
      console.log(this.res)
    }
  };
  results.push(resultContainer);
  printResult(result, OutputMode.CONSOLE);
  printResult(result, OutputMode.ALERT);
  // results[0].print();
});

function logAndEcho<T>(val: T){
  console.log(val);
  return val;
}

logAndEcho<string>('Hi there').split(' '); // Generic function

