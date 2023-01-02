# Practice

## Counting Cards

You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

        let count = 0;
        
        function cc(card) {
        // Only change code below this line
        switch(card) {
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            count += 1;
            break;
            case 10:
            case 'J':
            case 'Q':
            case 'K':
            case 'A':
            count -= 1;
            break;
        }
        let result;
        if (count > 0){
            result = count + ' Bet';
        } else {
            result = count + ' Hold';
        }
        return result;
        // Only change code above this line
        }
        cc(2); cc(3); cc(7); cc('K'); cc('A');

## Record Collection

You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

- Your function must always return the entire record collection object.
- If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
- If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
- If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
- If value is an empty string, delete the given prop property from the album.

Note: A copy of the recordCollection object is used for the tests.