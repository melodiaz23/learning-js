# Javascript Notes

_'Tal vez no sepa lo que haga, pero luzco genial hacíendolo'_

* Dynamic, weakly typed.
* Compiled at run time.

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

#### For loop
Execute code a certain amount of times (with counter variables). With that we define that a certain part of the code should run any time. 

	for (let i= 0; i < 3; i++)
	{
	console.log(i);
	}

#### For-of loop
Execute for every element for every element in an array.

	for (const el of array)
	{
	console.log(el);
	}

#### For-in loop
Allow to execute code for every key in an object.

	for (const key in object)
	{
    console.log(key);
    console.log(obj[key]);
	}


### While loop
Execute code as long as a certain condition is true and only if that condition is somehow set to false, exit out of the loop.

	while (isLoggedIn){
	…
	}

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
>0
1
2
3
4

Using **break**, we get: 

    for (let i = 0; i<5; i++){
        if (i ===3){
            break;
        }
        console.log(i);
    }

In the console: 
>0
1
2

With **continue**:

    for (let i = 0; i<5; i++){
        if (i === 3){
            continue
        }
        console.log(i);
    }

In the console: 
>0
1
2
4

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











