# Javascript Notes

_'Tal vez no sepa lo que haga, pero luzco genial hacíendolo'_

* Dynamic, weakly typed.
* Compiled at run time.
* Single threaded -> Can only do one thing at a time.

## Window.prompt

Instructs the browser to display a dialog with an optional message prompting the user to input some text, and to wait until the user either submits the text or cancels the dialog.

### Sintax
    prompt()
    prompt(message)
    prompt(message, defaultValue)

## If statements and loops

### Loops
* Execute code multiple times.
* Allow to write code repetition in a more dynamic and flexible way. 

There are: 
1. [for](#for-loop) 
2. [for...of](#for-of-loop)
3. [for...in](#for-in-loop)
4. [while](#while-loop)
5. [do...while](#do-while-loop)
6. [forEach](#foreach)

### For loop
Execute code a certain amount of times (with counter variables). With that we define that a certain part of the code should run any time. 

	for (let i= 0; i < 3; i++){
	console.log(i);
	}

    // First part is initialitation (i = 0).
    // Next part is the condition (i < 3).
    // Final expresion, iterate our counter (i++).

Another common use for for loop is:

    const names = ['jhon', 'bob', 'mary', 'joe']

    for (let i = 0; i < names.length; i++){
    console.log(names[0]);
    }

Another way to do it is with a for-of loop...

### For-of loop
Execute for every element for every element in an array.

	for (const el of array)
	{
	console.log(el);
	}

e.g:

     const names = ['jhon', 'bob', 'mary', 'joe']

     for (name of name){ // Is taking each value an assing a name variable
        console.log(name);
     }


### For-in loop
Allow to execute code for every key in an **object**.

	for (const key in object) // is looping through each key and logging the value of each.
	{
    console.log(key);
    console.log(obj[key]);
	}

    const user = {
        firstname: 'Jhon',
        lastName: 'Doe'
    }
    for (key in user){
        console.log(user[key]);
    }


### While loop
Execute code as long as a certain condition is true and only if that condition is somehow set to false, exit out of the loop.

	while (isLoggedIn){
	…
	}

e.g: 

    let i = 0
    while (i < 10){
        console.log(i);
        i++; // If we didn't increment i, it will create an infinite loop
    }

### Do while loop

    let i = 0
    do {
      i++;
      console.log(i);
    } while (i < 10) // Check for the condition after the do statement has run.

### forEach

    const animals =['cat','dog','horse','sheep','bird'];

    animals.forEach(animal =>{
        console.log(animal)
    })

Resources: [JavaScript Loops Made Easy](https://www.youtube.com/watch?v=Kn06785pkJg)

**_Nested Loop -Excercise-_**

    let sum = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 5; j > 2; j--) {
            sum = sum + j + i;
        }
    }
    console.log(sum); // ???


0
I=0
J=5
Sum = 5

J = 4
Sum=9

j= 3
Sum=12


I=1
j=5
Sum= 18

j=4
Sum= 23

j=3
Sum=27


I=2
j=5
Sum=34

j=4
Sum=40

j=3
Sum=45


What does the following loop produce as output?
	
	let sum = 0;
	for (let i = 0; i < 3; i++) {
	for (let j = 5; j > 2; j--) {
	sum = j + i;
	}
	}
	console.log(sum); // ???

I = 0
j=5
Sum = 5
j=4
Sum=4
j=3
Sum=3



I=1
j=5
j=4
j=3

I=2
j=5
j=4
j=3
Sum=5


_**Task**_

const randomNumber = Math.random();const anotherNumber = Math.random();

//Both are greater 0.7 or at least one of the two is not greater than 0.2

    function randomNumbers(){  if (randomNumber > 0.7 && anotherNumber > 0.7){    console.log('Both numbers are greater')  }   if (randomNumber < 0.2 || anotherNumber < 0.2){    console.log('One of both numbers are not greater than 0.2')  }}

    randomNumbers();

### Break and Continue

Bothe give extra control over loop execution. 

**Break:** Tells JS, stop the loop execution of the loop.
**Continue:** Move to the next iteration.

e.g:

    for (let i = 0; i<5; i++){
        console.log(i);
    }

In the console: 
> 0
> 1
> 2
> 3
> 4

Using **break**, we get: 

    for (let i = 0; i<5; i++){
        console.log ('Test' + i)
        if (i ===3){// if its equal to 3, then stop.
            break; 
        }
    }

In the console: 
> Test0
> Test1
> Test2
> Test3

With **continue**:

    for (let i = 0; i<5; i++){
        if (i === 3){
            continue
        }
        console.log(i);
    }

In the console: 
>0
>1
>2
>4

##### Quiz: Loops and Breacks

_What's the result of the below code?_

    let sum = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 2; j++) {
            sum = sum + i + j;
            break;
        }
    }
    console.log(sum); // ???

I0 S0
I1 S1
I2 S3
I3 S6
I4 S10

What's the result of the below code?

    let sum = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 2; j++) {
            sum = sum + i + j;
            continue;
        }
    }
    console.log(sum); // ???

I0 J0 S0
I0 J1 S1

I1 J0 S2
I1 J1 S4

I2 J0 S6
I2 J1 S9

I3 J0 S12
I3 J1 S16

I4 J0 S20
I4 J1 S25

>Continue actually has no effect here. We call it after all inner loop code has been executed, so we move on to the next iteration - something that would've happened anyways.


What's the result of the below code?

    let sum = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 2; j++) {
            if (i >= 2) {
                continue;
            }
            sum = sum + i + j;
        }
    }
    console.log(sum); // ???

I0 J0 S0
I0 J1 S1
I1 J0 S2
I1 J1 S4

> The inner loop basically becomes useless once i reaches a value of 2.

## Error Handing 

- User Input Errors
- Network Errors
- ...

With a control estructure like try/catch.

        Try {...} catch (error){...}

This estructure alows to **try** a certain code which might fail and then **catch** the potencial errors thrown in that code to them do something with them.

### Sintax try... catch

    try {
      tryStatements
    } catch (exceptionVar) {
      catchStatements
    } finally {
      finallyStatements
    }


**Resources:**

* [Control Strcutures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

* [Loops and Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)


# How JS works

## ES5 Vs. ES6+ Syntax

ES stand for EcmaScript.

We could say Javascript is a specific version of ECMAScript. ECMAScript, in the end is the language being standardized by
this ecma international body.

Javascript evolved. ES5 was the first real big standard. And in 2015 was released another versión, ES6, also known as ECMAScript 2015; since then more, features have been added and are integrated by browser vendors step-by-step.

### ES5: 
- Supported in bassically all browser, including old IE. 
- Only had *var*, not *let* or *const*.
- Generally same syntax as ES6, but quite some missing features. 

### ES6 (and newer):
- Supported in mondern browser, can (mostly) be transpiled *(specific term for taking source code written in one language and transforming into another language that has a similar level of abstraction.)* to ES5.

- Many new features help us write cleaner, better & faster code.

- Still under active development.

## var vs let vs const

Available since ever:

**var** --> Creates a variable.

> var only knows **global scope** and **funtion scope**, so a variable created in a function can't be used outside of it.

___

Available since ES6:

**let** --> Changeble, also a variable.

**const** --> Constants.

> let and const don't care abou functions, they care about the curly braces (functions, if statements, for loops, try/catch blocks have curly braces).

### Block Scope

Var are function and global scope.

If we create a varibale between the curly braces with let or const, then the variables are **scoped to that block**.

That give us more conttrol over where our data is available.

Modern JS forces us to write better, cleaner code and forces us be clearer about our intentions.

We still have var but we don't use it anymore.

### [Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

If we have:

        console.log(userName);
        var userName

We get 'undifine'. But if insted of var we put let we get an error:

> ReferenceError: Cannot access 'userName' before initialization

That is because hoisting, a especial feature that means that the javascript engine, the browser, when it loads the script, goes over the entire script and look for things like functions or 

* With var, it pulls the variable declaration to the beginning and assings an initial value of undifine.

* With let and const the browser doesn't initialize the variable to undefined, it just kind of declares it.
___

Any of the following behaviors may be regarded as hoisting:

- Being able to use a variable's value in its scope before the line it is declared. ("Value hoisting")
- Being able to reference a variable in its scope before the line it is declared, without throwing a *ReferenceError*, but the value is always undefined. ("Declaration hoisting") -> **Var declaration**, type 2 behaviour.
- The declaration of the variable causes behavior changes in its scope before the line in which it is declared. -> let, const declarations (lexical declarations), type 3 behavior.

## How JS works

Browser -> Parsing & Execution with a *Javascript engine*. 

* Chrome has v8.
* Firefox has Spider Monkey. 

The Javascrip Engine consist of two parts: 
* Interpreter -> Loads our script (reads it), translates it to byte code, and then starts running the script. Also hands off the byte code to the compiler.
* Compiler (jiT = Just in time compiler)

> Compile refers to the act of converting programs written in high level programming language, which is understandable and written by humans, into a low level binary language understood only by the computer.
>To compile, we need a compiler.

### The heap

The heap is the 'long term memory'. It stores data in our system memory and manages access to it.

![Image](https://miro.medium.com/max/1400/1*_x4mkpWcBs72s5BcdJe4Wg.webp)

### Call Stack

Is like the 'short term memory'. It manages our program flow (functuion calls and comunication)

The call stack is responsible for keeping the flow of execution for our application. Without it, JavaScript wouldn’t know what to call or when.

### Event Loop

Help us with asynchronous code. Help us with things like event listeners. There is in the **browser**.

### Primitive Vs. Reference Values

Two categories of Types/Values:

* Primitive Values:
    * Strings
    * Numbers
    * Booleans
    * Null
    * Undifined
    * Symbol

This are stored in memory (normally on Stack). Primitive values are copied by value (this means that js create a copy of it)

* Reference values:
    * Objects
    * Array

Stored in memory (Heap). Reference values, because they are more complex to manage, if we copy a variable wich holds a reference values, we just copy the reference and not the value.

If we want to have a copy of a reference value: 

        let yetAnotherPerson = { ...person };
        // What it does is it pulls out all the key-value pairs in person and add them
        // as new key value pairs to this new object.

Same for arrays: 

    let hobbies = ['Sports'];
    let moreHobbies = [...hobbies];

If we compare reference values (objects or arrays) with the same information (inside) the result will be false because the refereces values are stored in different places.

> **Useful resource:** [Primitive vs Reference Values](https://academind.com/tutorials/reference-vs-primitive-values)

### Garbage collection

What about the heap and how this memory is managed? --> The garbage collector.

The garbage collector periodically checks Heap for unused objects (objects without references), like this:

    let person = {myName: 'Mel'};
    person = null;

if the engine detects that {myName: 'Mel'} is not use it anymmore, it will clean this up.

> We should be aware of **memory leaks**, that is when we have some variable or some place where we still hold a reference to an object wich we don't use anymore.  


## Functions

>* Functions are these constructs wich allow us to define code on-demand.
>* Variables and constants created in functions 'belong' to that function --> [Block scope](#block-scope)
>* CAN take parameter (arguments) and CAN return a value.
>* Can be called multiple times (with different arguments).
>* Can be called "directly" and "indirectly".

In a function if we get: 

    function sayHi(name) { ... } // Name is the parameter.
    .
    .
    .
    sayHi('Max'); // 'Max' is an argument of the fuction. 


**Parameters** are these variables which you specify between parentheses when defining a function.
**Arguments** then are the concrete values you pass to a function when calling that function

**Functions are objects**

To prove that, if we run:

    console.dir(startGame) // Dir give us a different insight into objects.

The result is: 

    ƒ startGame()
    arguments: null
    caller: null
    length: 0
    name: "startGame"
    prototype: {constructor: ƒ}
    [[FunctionLocation]]: app.js:3
    [[Prototype]]: ƒ ()

This show up key value pairs and all are properties of the function. And the end is basically a special type of object.

### Differente ways of creating functions

* Store functions in variables or constants:

    const start = function startGame(){ 
    console.log('Game is starting...');
    }; //Because the function is on the right side, the convention is to add the semicolon ;
    startGameBtn.addEventListener('click', start);

> * In that case, we use the function as an expression insted of as a declaraction/statement.
> * Function declarations automatically create variables that hold the function objects.
> * Expresions are essentially the thing that yield a value, something we could store.
> * Function expression also still take arguments and still return values that didn't change.


### Anonymous functions

It is when we omit the name of the function like this: 

    const start = function() { 
    console.log('Game is starting...');
    };
    startGameBtn.addEventListener('click', start);

* Is usefull if we're gonna use that funnction just ONE time. 
* We assign a name to an anonymous function because the name is using for debugging. It's optional.

> * A different way of defining function is with the keyword arrow [=>].
> * **Always** have to be store in some variable or use it in a place where it would use an anonymous function.

**General Sintax Arrow Fuctions**

    (arg1, arg2) => {...}
    // Another way to write it if: 
    () => {...} 
    // No arguments/parameters
    // Empty pare of parentheses is required.
    arg => {...}
    // With ONE argument, parentheses can be omitted.
    (a, b) => a + b
    // Exactly ONE expresion in function body
    // Curly braces can be omitted
    // If we omit the curly braces, we also must remove any return keyword.
    // The result of this calculation will then always be returned.
    pName => ({name: pName})
    // Extra parentheses are required around the object. 

Using arrow functions, curly braces can have two meanings:
* Mark the function body (degault form)
* Create an object wich you want to return (in shorter function body form)

### Default arguments & rest operator

We assign a default value by adding an equal sign.


### Callback functiones & functions in functions

Different way of defining funtion:


### Bind() & More




