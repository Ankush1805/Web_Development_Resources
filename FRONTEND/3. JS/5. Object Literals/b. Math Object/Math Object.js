/**
 * Math Object
 */

// Property
Math.PI; // 3.141592653589793
Math.E;  // 2.718281828459045

// Methods

// abs function -> will return -ve value
Math.abs(5);    // 5
Math.abs(-5);   // 5
Math.abs(5.5);  // 5.5
Math.abs(-5.5); // 5.5

// power function
Math.pow(2, 3); // 8

// floor function -> will return round off smallest (or equal) value
Math.floor(12.5);  // 12
Math.floor(-12.5); // -13
Math.floor(12.9);  // 12

// ceil function -> will return round off largest (or equal) value
Math.ceil(12.5);  // 13
Math.ceil(-12.5); // -12
Math.ceil(12.9);  // 13

// random function -> Generate a random number between 0 (inclusive) and 1 (exclusive) >> will never generate '1'
Math.random();


/**
 * Random Integers ( 1-10)
 */

// step-1
let num = Math.random(); // 0.456789
// step-2
num = num * 10; // 4.56789 (if we need to generate integers from 1-100, multiply by 100, for 1-5, multiply by 5....so on)
// step-3
num = Math.floor(num); // 4
// step-4 (as this method will generate integers from 0-9 but not '10', so add '1' as we want integers from 1 t0 10)
num = num + 1;

// single step
Math.floor( Math.random() * 10 ) + 1;  // 1-10
Math.floor( Math.random() * 100 ) + 1; // 1-100
Math.floor( Math.random() * 5 ) + 1;   // 1-5
Math.floor( Math.random() * 5 ) + 20; // 20-25
Math.floor( Math.random() * 5 ) + 21; // 21-25

/**
 * Guessing Game
 */
let maxNo = prompt("Please enter max number.");
let randomInt = Math.floor(Math.random() * maxNo) + 1;

let guessInt = prompt("Guess the number.")

while(true) {
    if(guessInt == "quit") {
        console.log("Quitting")
        break;
    }
    if(guessInt == randomInt) {
        console.log(guessInt);
        console.log("Correct.")
        break;
    } else if(guessInt < randomInt) {
        console.log(guessInt);
        guessInt = prompt("Inorrect. Please try with larger value.")
    } else if(guessInt > randomInt) {
        console.log(guessInt);
        guessInt = prompt("Inorrect. Please try with smaller value.")
    }
}