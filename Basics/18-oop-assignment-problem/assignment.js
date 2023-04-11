class Course {
  #_price;

  get price() {
    return '$' + this.#_price;
  }

  set price(value){
    if (value < 0) {
      throw 'Invalid value!';
      // value = null
      // return;
    } 
      this.#_price = value;
  }


  constructor(title, length, price){
    this.title = title; 
    this.length = length;
    this.price = price;
  }

  value(){
    const divide = this.length / this.#_price;
    return divide.toFixed(2);}

  render(){
    console.log('Course Summary')
    console.log(`Name of the course: ${this.title}`);
    console.log(`Lenght: ${this.length}`);
    console.log(`Price: ${this.price}`);
  } 
}

class PracticalCourse extends Course {

  constructor(excercises, title, length, price){
    super(title, length, price);
    // this.courseOne = new Course ('Javascript', 50, 29.99);
    // this.courseTwo = new Course ('Python', 24, 19.99);
    this.numOfExercises = excercises;
  }
}

class TheoreticalCourse extends Course {

  // constructor(){
  //   // super(title, length, price);
  //   super();
  //   this.publish();
  // }
  publish(){
    console.log('Something to print to the console')
  }
}

class solution {

  constructor(){
    this.courseOne = new Course ('Javascript', 50, 29.99);
    this.courseTwo = new Course ('Python', 24, 19.99);
}

  task1() {
    console.log('TASK # 1')
    console.log(this.courseOne);
    console.log(this.courseTwo);
  }

  task2() {
    console.log('TASK # 2.1')
    console.log(`On ${this.courseOne.title} course, the value you paid for each hour is ${this.courseOne.value()}`);
    console.log(`On ${this.courseTwo.title} course, the value you paid for each hour is ${this.courseTwo.value()}`);
    console.log('TASK # 2.2')
    this.courseOne.render();
    this.courseTwo.render();
  }

  task3() {
    console.log('TASK # 3')
    const practicalJS = new PracticalCourse(5, 'Javascript', 50, 29.99)
    const practicalPython = new PracticalCourse(7, 'Python', 24, 19.99)
    console.log(practicalJS);
    console.log(practicalPython);
    // practicalJS.render();
    const theorethicalJS = new TheoreticalCourse('Javascript', 50, 29.99);
    const theorethicalPython = new TheoreticalCourse('Python', 24, 19.99);
    console.log(theorethicalJS);
    console.log(theorethicalPython);
    theorethicalJS.publish();
  }

}

const assignment = new solution();
console.log(assignment)
assignment.task1();
assignment.task2();
assignment.task3();
