# Javascript Notes

_'Tal vez no sepa lo que haga, pero luzco genial hacíendolo'_

* Dynamic, weakly typed.
* Compiled at run time.
* Single threaded -> Can only do one thing at a time.
* Is a hosted language -> The browser provides the environment for JS to run.

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
Execute for every element for every element in an **array**.

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
    * Functions

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

We assign a **default value** by adding an equal sign.

    const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => ...

If in a function, we don't define an argument, JS, uses undifined as a value for the missing argument.

The **rest operator** take all arguments the functions get and merged into an array. e.g:

    const sumUp = (...numbers) => {
        ...
    }

> Rest operator has to be the last argument on the list. This always consumes all arguments and merge them together, if we put it at the end, we couldn't never reach that argument.

We also have arguments:
* Arguments is a keyword, it's built into javascript.
* We can use it inside of functions that use the function keyword (function())
* Give us and array-like object (not a tru array)
* This is an alternative to using the rest operator.
* Is recomended the rest parameter. 


### Callback functiones & functions in functions

**Callback functions** is when the function it's called for you by something else.

### Bind() & More

bind() -> create a new reference at a function which it returns to us, which will be preconfigured.


### call () & apply ()

**Useful resources & links**

[Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) -> More on Functions (MDN)

[Function.prototype.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind) -> bind ()

### Functions advanced concepts

#### Pure and impure functions

With pure functions, same arguments always produce the same output and not trigger any side effects.

Withe impure functions we can't predict the output. And is also considere impure if introduce side effects (change anything outside the function).

#### Factory functions

Functions that produce another function.

#### Closures

Every functions in JS is a clousure.

Each functions has his own lexical evironment.

Closures means that every function closes over the surrounding environment wich means it register the surrounding evironment and the variables registred there and it memorizes the values of these variables.

Functions remember the surrounding variables.

#### Recursion

The function call itself.

**Useful links**

More on Closures (MDN): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

Recursion (MDN): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion


## HTML, DOM & JS

### The Document Object Model (DOM) 

> * Is the loaded and rendered HTML code. In other words the object representations of the code which the browser creates behind the scnes into which we can tap with JS.
> * Is a programming interface (API)
> * DOM represents the content of xml or HTML document as tree structure.
> * With DOM we can easily read, access, update the contents of the document.
> * DOM - Document (file), Object (tag elements), Model (layout structure)
> * DOM is not strictly tied to browsers, there are other tools thay can parse HTML.

**Resources:** [DOM Introduction on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)


**JS**

We got certain methods/funcionalities, that allows us to reach out the loaded HTML code.

**BROWSER** 

    <body>
    <h1>Welcome!</h1>
    </body>

* When that html document is downloaded, the browser goes over it and parsed it and rendered it.
* Provides the JS engine which in the end parses and understands all the JS code. 
* Provides APIs, into which JS can tap.

____

**Document Object**
-> Important piece in working with the loaded HTML code.
-> root DOM node
-> Provides acces to elemente querying, DOM content etc. 
-> It is part of the window object.

If we type on console: 
    document //Access to the document object

    console.dir(document) // To get a look into the real js object. 

**Window object**
-> Global object
-> The active browser window/tab. The global storage for the script. 
-> Acts as a global storage for script, also provides access to window-specific properties and methods. 

If we type on console:
    window // To get access to the window object.
    // Gives us access to all the core APIs that the browser wants to exposes to us.
    // The windows always looks in the window object if we're calling or accessing something.

### Nodes & elements

At the end the browser creates a tree of elements or a tree of nodes.

**Elements nodes** -> All the elements we have.
-> An element node represent and HTML element.
**Text nodes** ->  All text we have.
-> Is stored as objects but as a different kind of object, with differente properties and different methods.

i.e: 
    textContent // Text content element, wich in the end holds the text.

> **Nodes**
-> Are the objects that mmake up the DOM. Everything in the DOM is a node.
-> HTML tags are 'element nodes' (or 'elements')
-> Text creates 'text nodes'
-> Attribute create 'attribure nodes'

> **Elements**
-> Elements are one type of nodes 
-> We have especial properties an methods to interect with the elements.
-> Available methods and properties depend on the kind of element.
-> Can be selected in various different ways (via JS)
-> Can be created and removed via JS.

### Querying DOM nodes & traversing the DOM

#### Queryng Elements 

**querySelector(), getElementByld()**
-> Will select one element at a time.
-> Query selector takes a CSS selector as we could use it in a CSS file.
-> Get element by ID takes an ID, assigned to an HTML element and selects and element by that.
-> Direct referente to DOM element is returned.

**querySelectorAll(), geteElementsByTagName()**
-> Will select multiple elements. 
-> Give access (return) to collections of elements (array-like objects) - Tipically a NodeList
-> Different ways of querying elements.
-> Get elements by tag name give all the elements that have a certain HTML tag.
-> Query selector all, give us access to a non-live node list (a snapshot of the currently rendered DOM)

#### Selecting elements in the DOM

There are some selection methods. 

**ID**

    document.getElementById(<ID>);
> Takes an ID (without #, just the id name) and returns the element that has this id. Since the same ID shouldn't occur more than once on your page, it'll always return exactly that one element. Returns null if no element with the specified ID could be found.

    document.getElementById('The id')
    // We use it only if we want to get and element by ITS ID. Because it is a unique element.

And to get and idea for what is in the object:
    console.dir(document.getElementById("The id"))
    // The output here is the object the browser creates and exposes to us in JS. 

> With document. and some selection method we can searh in the entire document.

**Class**

    document.getElementsByClassName(<CSS CLASS>);
> Takes a CSS class g (e.g. 'some-class') and returns a live HTMLCollection of matched elements in your DOM. Returns an empty HTMLCollection if not matching elements were found.

    document.getElementsByClassName('the class')
    // This will return a so called HTMLCollection object which in the end is like an array.

    document.getElementsByTagName(<HTML TAG>);

> Takes an HTML tag (e.g. 'p') and returns a live *HTMLCollection* of matched elements in your DOM. Returns an empty HTMLCollection if not matching elements were found.

[**Query selector**](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

    document.querySelector(<CSS selector>);

> Takes any CSS selector (e.g. '#some-id', '.some-class' or 'div p.some-class') and returns the first (!) matching element in the DOM. Returns null if no matching element could be found. 

    document.querySelector('.the-class')
    // With this we need a selector:
    // dot(.) for class
    // hashtag(#) for id
    // Query selector is used if we want a collection or one element but with a more complex query.
    // It will return the FIRST matching item.

With query selector is also possible to use a CSS selector.

    document.querySelectorAll(<CSS selector>);
> Takes any CSS selector (e.g. '#some-id', '.some-class' or 'div p.some-class') and returns all matching elements in the DOM as a static (non-live) *NodeList*. Returns and empty NodeList if no matching element could be found.

    document.querySelectorAll('.the-class')
    // Is use if we want to have all matching items.
    // Give us a node list such an array.

or, more complex way like:

    document.querySelector('ul li:firts-of-type');

**ALSO** we have special properties on the document object to select parts of the document:

* document.body => Selects the <body> element node.
* document.head => Selects the <head> element node.
* document.documentElement => Selects the <html> element node.


### Evaluating & manipulating DOM nodes

p.textContent -> To read content (get access to all text or to set new content)
p.id -> Read ID
p.className -> Class name property

**To change style of the content**
p.style.color
p.style.backgroundColor

> **Attributes Vs Properties**
> Usually, attributes are mapped to properties.
> * Attributes: What we write in the HTML code.
> * Properties: Object has properties. Is a value store in the object thats create base on the HTML code.
> For DOM objects we also have properties.

Properties (automatically added on created DOM objects)
e.g:
    conts input
    input.id -> 1:1 mapping (live-sinc)
    input.className -> Different names - Not always de property name is equal to the attribute name.
    input.value -> 1:1 mapping (1 way live sync)
    
If we do want to change an attribute, we have setAttribute method.

    input.setAttribute('value', 'text here') 
    // (name of the attrribute, value we want to assign)
    input.getAttribute('value')
    // To reset the content


#### Traversing the DOM

We have: 
* Child
* Descendent 
* Parent
* Ancester

If we want to get access to some of this, we can do it throught: 

**up**
* parentNode -> This propertie select any parent node.
* parentElement -> Select a parent node that is an element.
* closest('ancester we want to access') - Usefull to get access to any ancester node

**down**
* childNodes -> Select every childNodes including text nodes.
* children -> Select child ELEMENTS, via element.children[0]
* querySelector() -> Any selector node. 
* firstChild
* firstElementChild
* lastChild
* lastElementChild

**same level**
* previousSibling
* previousElementSibling
* nextSibling
* nextElementSibling

#### Styling DOM elements

* Via style property 
    * Control styles as inline styles on the element.
    * Are based on CSS properties but have adjusted names.

* Via className
    * Directly set the CSS clases assigned to the element.
    * Set/Control all classes at once.
    * We can also control the id or other properties.

* Via classList
    * Is an object that has a build in properties.
    * We can add, remove or toggle CSS clases.

Throught classList we get access to some methods. e.g:
> contains --> check if a class is set.
> add --> add a new class.
> remove --> remove a class.
> replace --> replace a class.
> toggle --> toggle a class.

### Creating & removing DOM nodes

#### Creating elements

* HTML string 
    **-> innerHTML:** if we want to set new elements. It will replace all the HTML content
    
    **-> insertAdjacentHTML():** Allow us to target a position and them define wich one HTML we we want to enter.

    * _sintax_
    insertAdjacentHTML(position, element)

    * _position_

    'beforebegin': Before the targetElement itself.
    'afterbegin': Just inside the targetElement, before its first child.
    'beforeend': Just inside the targetElement, after its last child.
    'afterend': After the targetElement itself.


* createElement() -> to create single DOM element node (create a new DOM object)
It is always create on the document.
* _sintax_ 
document.createElement(tagName) -> tagName is the tag of the element we want to create.
createElement(tagName, options) 

#### Inserting elements

    *-> appendChild() / append* -> with appendChild() we insert the DOM element we create. With append we also can add a string.*
    *-> prepend(), before(), after(), insertBefore()*
        - prepend(): it insert a element we create to the first element. For IE: element.insertBefore().
        - before() - after(): before or after the element. (IE and safari has problem with bafore and after)
        - insertBefore() - has support for IE and Safari.
    *-> replaceChild(), replaceWith()*
        - replaceWith(): replace an element

Another way to insert an element: 

        element.insertAdjacentHTML(posición, texto); -> Has better browser support
    
> _position_
> 'beforebegin': Before the targetElement itself.
> 'afterbegin': Just inside the targetElement, before its first child.
> 'beforeend': Just inside the targetElement, after its last child.
> 'afterend': After the targetElement itself.


#### Cloning DOM nodes

To copied elements: 

    element.cloneNode(true or false); // false (default value) for clone just the element without the childs. true to clone ALL.

#### removing elements

    element.remove() -> remove the element from the DOM

or, another way could be: 

    element.parentElement.removeChild() // In parenthesis, the item we want to delete.
    This is supported in ALL browsers

#### Text nodes

We can easily create & insert text nodes in one go:

    someElement.textContent = 'Hi there!';
    // This creates and inserts the text node with a content of 'Hi there!'.

to append to existing text:

    someElement.textContent = someElement.textContent + 'More text!';

# Arrays & iterables

**Iterable:** Can be define as any object that implement the 'iterable' protocol and have an @@iterator method (i.e. Symbol.iterator). In other words, objects where you can use the for-of-loop.

> Not every iterable is an array. Other iterables are: NodeList, string, map, set.

**Array-like object:** Objects that have a lengh property and use indexes to access items. 

> Not every array-like object is an array. Other arrays likes are: NodeList, String.

## Different ways of creating arrays

Depends on the kind of data we have.

>**Wich data can we store on an Array?**
>
>We can store: 
>* Numbers
>* Strings
>* Objects

Arrays are index based. We can access data by index.
Also, they are **reference values**.

## Working with arrays 
## Important array methods 

## Other iterables: Maps & sets

In JS we got three major iterable data structures. There are some data containers: 

**Arrays**
    -> Store (nested) data of any kind and length.
    -> Iterable, also many special array methods available. 
    -> Order is guaranteed, duplicates are allowed, zero-based index to access elements.

**Sets** 
    -> Sets are a data estructure wich help us to manage unique values.
    -> Store (nested) data of any kind of length. 
    -> Iterable, also some special set methods available.
    -> Order is not guaranted, duplicates are NOT allowed, no index-based access.

**Maps**
    -> Stored key-value data of any kind and length, any key values are allowed. 
    -> Iterable, also some special map methods available.
    -> Order is guaranteed, duplicate keys are not allowed, key-based access.

> **Maps Vs. Objects**
> - Maps can use ANY value as keys, object only use strings, numbers or symbols.
> - For large quantities of data, maps has better performance than objects do.
> - Maps has better performance when adding & removing data frecuently, while objects are easier and quicker to create. 

[**Useful link**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### OBJECTS

Objects are core data Structure. 

- Reflect'real-world' entities (things with can interact with, like buttons).
- Allow us to apply real-world logic.

Objects are made up of properties & methods (key value pair, that are a functions). 
- Properties are variables in an object, we use it to store data. 
- Methods are functions in an object.


> Properties are key-value pairs which store some static values or some values, not
functions. If we store a function as a value on a certain key, then this is called a method.

___

There are: 

**Primitive Values:** Numbers, Strings, Booleans, null, undefined, Symbol.

**Reference Values ( = Objects):** Everything else... 
- DOM
- Object literal notation => {}. 
- Arrays (special type of objects).
- ... other built-in objects. 

**_How looks and object?_**

const person = {
  name: 'Max',  ----> Properties 
  age: 30, 
  hobbies: ['sports', 'cooking'],
  greet: function(){ ----> Methods
    alert('Hi there');
  }
}

name, age, hobbies are keys (are more flexibles than variables).

#### Object spread operator

What this does is it takes all key-value pairs of that object you pass after the spread operator and merge these key-value pairs into a new object.

    const person = {name: 'Max', hobbies: ['Sports', 'Cooking']};
    const anotherPerson = {...person};

The spread operator creates a new object, it copies the values we have in the keys of the old object and also the key names (it copied the top level key-value pairs)

_**Useful resources**_

- [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

### Classes & Object Oriented Programming (OOP)

#### What is OOP?

Is and aprroach that allow us to structuring our code. Is about embracing the logic of work with object in all our code.

#### Classes and instances

Classes alow us to build objects in an easiar way. Classes are blueprints for objects.

Objects are also calls **instances** of classes. We can create an object based on some class. 

#### Properties, fields & methods

##### Static Field / Property / Method

    - Define with static keyword
    - Only accessible on class itserl, without instantiation.
    - Typically used in helper classes, global configuration, etc.

##### Instance Field / Property / Method

    - Define with static keyword.
    - Only accessible on instances based on class.
    - Use for core, re-usable logic.

#### Inheritance

_**Useful resources**_

- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

### CLasses & OOP

#### Classes and objects
### Constructor functions (without classes)

Constructor functions are: 
- Blueprint for Objects (as Classes)
- Properties & Methods (as Classes)

    Now, the constructor function we have **inside** of a class effectively allows us to define the class body, so all the instructions that should run when an object is created based on the blueprint inside

    In a constructor function, it's obvious that whenever we create a new object based on it, all the code in that function executes.

### Prototypes & prototypical inheritance

Prototype objects are 'fallback objects' which JS has a look at it if searches for a certain property or method.

Prototype is basically a connected object wich is used as a fallback object.  Are in the end just connected objects which serve as fallback objects.

    EVERY object in JavaScript by default has such a fallback object (i.e. a prototype object) 

**Prototypical inheritance** refers to the ability to access object properties from another object.

_**Useful resources**_

- [Constructor Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#using_a_constructor_function)

- [Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)

- [Window: navigator property](https://developer.mozilla.org/en-US/docs/Web/API/Window/navigator#example_1_browser_detect_and_return_a_string)

- [Browser detection using the user agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent)

- [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date);

- [DOM getBoundingClientRect():](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect);

## Working with events

### Event propagation

### Drag and Drop