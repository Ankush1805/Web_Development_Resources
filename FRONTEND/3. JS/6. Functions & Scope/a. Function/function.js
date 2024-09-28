// Definition (telling JS)
function functionName() {
    console.log("hello");
}

// Function Calling (Using the function)
functionName(); // hello

//Qs-1. function to roll dice & display value (1-6)
function rollDice() {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    console.log(diceValue);
}

rollDice();

//Qs-2 function for avg of 3 no
function average(a, b, c) {
    let avg = (a+b+c)/3;
    console.log(avg);
}

average(15,25,35);


//Qs-3 function for multiplication table
function tableOf(n) {
    for(let i=1; i<=10; i++) {
        let multiplication = n * i;
        console.log(multiplication);
    }
}
// tableOf(5);

/**
 * Return -> keyword used to return some value from the function
 */
//Qs-4 function that returns sum of numbers from 1-10
function sumOf(n) {
    let sum = 0;
    for(let i=1; i<=n; i++) {
        sum = sum + i;
    }
    return sum;
}

sumOf(10); // will return value but not print


/**
 * Functions Expressions -> nameless functions
 */
let hello = function() {
    console.log("hello");
}

hello(); // calling the function using vaiable name

// we can change the value of vairable anytime, anywhere
hello = function() {
    console.log("namaste");
}


/**
 * Higher Order functions -> a function that does one or both
 *                         - takes one or multiple functions as arguments
 *                         - returns a function
 */
function multipleGreet(func, n) {
    for(let i=1; i<=n; i++) {
        func();
    }
}

let greet = function() {
    console.log("Good Morning");
}

multipleGreet(greet, 2);
// NOTE - in above method calling, we are passing the definiton of greet method & not by execution i.e. greet()