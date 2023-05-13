# Notes

## DOM

**querySelector** => allows you to select an element on the page using a CSS selector.

**querrySelectorAll**

**closest( )** => Find the closest ancestor of an element that matches a given selector.



## Events

**event.dataTransfer** => It represents a list of strings that indicate the types of data that can be transferred during a drag-and-drop operation.

**event.dataTransfer.setData()** => method to set the data that will be transferred. The first argument to this method is the data format, and the second argument is the data itself.

**event.relatedTarget** => relatedTarget represents the element that the dragged item left to in order to trigger the dragleave event.

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