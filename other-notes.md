# Notes

## Numbers

        Number.MAX_SAFE_INTEGER // Max number JS can produce (integer number);

        number.toFixed(?fractionDigits) // Amount of digit we want to.

        parseInt(s) // Convert to an integer.

        bigInt(s) // Convert a number to a big int.

        isFinity() or Number.isFinitive()// To check if it's a Infinity number

        Math.random() // Random number between 0 and 1.

        Math.floor() // floor round the number DOWN to the nearest integer.

## Strings

        string.ToUpperCase();
        string.startsWith('') // To check if start with a certain secuence.
        string.trim() // To remove extra white space.
        userInput.includes('') // To find if a string includes something.
        string.match() // allows us to match a string against a regular expression and returns an array of matches


## Validations and error handling

variable.test() // Validate if somthing meet one pattern.

.catch();

## DOM

**querySelector** => allows you to select an element on the page using a CSS selector.

**querrySelectorAll**

**closest( )** => Find the closest ancestor of an element that matches a given selector.

'document.importNode()' -> clone the content.

'template.content' -> get a DocumentFragment object that represents the content of the template.

## Document interface

**importNode()** -> This method is used to import a node from another document into the current document. It creates a copy of the specified node, including its descendants, and returns the imported node.

## Events

**event.dataTransfer** => It represents a list of strings that indicate the types of data that can be transferred during a drag-and-drop operation.

**event.dataTransfer.setData()** => method to set the data that will be transferred. The first argument to this method is the data format, and the second argument is the data itself.

**event.relatedTarget** => relatedTarget represents the element that the dragged item left to in order to trigger the dragleave event.

**event.currentTarget** -> Property is a property available on event objects in JavaScript. It represents the element on which the event listener is attached, regardless of the element on which the event was originally triggered.

When an event is triggered and an event listener is invoked, the currentTarget property refers to the element to which the event listener was attached.

## Location

navigator.geolocation.getCurrentPosition(); => Get the user location, takes as arguments: 

- Success callback function: This is a required argument and should be a function that will be invoked when the geolocation request is successful.

- Error callback function: This is an optional argument, but it is good practice to provide an error callback function to handle any errors that may occur during the geolocation request.

## Time

setTimeout(callback, timeout);

#### Drag and drop

'dragenter'
'dragover'
'dragleave'
'dragstar'
'dragend'
'drop'

'dragstart': Fired when the user starts dragging an element. This event is used to initialize data transfer operations and set the drag image.

dragenter: Fired when the dragged element enters a drop target. This event is often used to change the appearance of the drop target to indicate that it can accept the dragged element.

dragover: Fired continuously while the dragged element is over a drop target. This event is often used to update the appearance of the drop target, such as by changing the cursor or highlighting the drop target.

dragleave: Fired when the dragged element leaves a drop target. This event is often used to reset the appearance of the drop target.

dragend: Fired when the drag operation is complete, either because the element was dropped onto a drop target or because the drag was canceled. This event is used to perform any necessary cleanup, such as removing the drag image or resetting the data transfer object.

drop: Fired when the dragged element is dropped onto a drop target. This event is used to handle the drop, such as by processing the data that was transferred or updating the UI to reflect the drop.

**RESOURCES**

- Events (MDN): https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

- Events Reference (MDN): https://developer.mozilla.org/en-US/docs/Web/Events

- Event Object (MDN): https://developer.mozilla.org/en-US/docs/Web/API/Event

- MDN Drag & Drop: https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API

## Constructor function - Class Build in JS

new Promise();

## JSON

JSON.parse ->  JSON data to JS.
JSON.stringify -> JS TO JSON data.

or...

.responseType = 'json' -> preconfigured to JS

## HTTP Requests

xhr.responseType -> // The browser will automatically parse the response as JSON and convert the result into a JavaScript object. 

fetch() -> Is promise base

globalThis.() -> store and read data