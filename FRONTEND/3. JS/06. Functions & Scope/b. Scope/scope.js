/**
 * Scope -> determines the  accessibility of variables,objects & functions from different parts of code
 * ============================================================================================================================================
 * Types-
 * 1. Function
 * 2. Block
 * 3. Lexical
 * 4. Global
 */


/**
 * Function scope -> variable defined inside a function are not accessible (visible) from outside the function
 * ============================================================================================================================================
 */

function calSum(a, b) {
    let sum = a + b;
}
//console.log(sum); // sum is not defined


/**
 * Block scope -> variable defined inside a block {} are not accessed from outside the block
 * ============================================================================================================================================
 */
{
    let a = 10;
    const b = 20;
    var c = 30; // block scope is not applied on var
}
//console.log(a); // a is not defined
//console.log(b); // b is not defined
console.log(c); // 30


/**
 * Global scope -> accessible anywhere
 * ============================================================================================================================================
 */

let diff = 50;
function calDiff(a, b) {
    console.log(diff); // 50
}
console.log(diff); // 50


/**
 * Lexical scope -> (Nested function concept) a variable defined outside a function can be accessible inside another function defined after the variable declaration
 * ============================================================================================================================================
 * 
 * The opposite is NOT true
 */

function outerFunction() {
    let x = 5;
    let y = 6;
    function innerFunction() {
        console.log(x);
        console.log(y);
    }
    innerFunction();
}

outerFunction();

/**
 * Hoisting -> using variables and functions before they are formally declared in the code
 * ============================================================================================================================================
 */
function outerFunc() {
    
    function innerFunc() {
        // using variables and functions before they are formally declared in the code
        console.log(x);
        console.log(y);
    }
    let x = 5;
    let y = 6;
    innerFunc();
}

outerFunc();



//Qs-1 

let greet = "hello";

function changeGreet() {
    let greet = "namaste";
    console.log(greet); // 'namaste'

    function innerGreet() {
        console.log(greet); // lexical scope
    }
}

changeGreet(); // 'namaste'
console.log(greet); // 'hello'

// NOTE - innerGreet will not run as it is just define but not called anywhere