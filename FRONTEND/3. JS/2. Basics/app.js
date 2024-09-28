/**
 * 1. console.log() -> To write (log) a message on the console
 * ===========================================================================================================================================
 */
console.log("Hello!!!");



/**
 * 2. Template Literals -> They are used to add embedded expressions in a string
 * ============================================================================================================================================
 */
let a = 10;
let b = 20;
console.log("Sum without Template Literals: " + (a+b));
console.log(`Sum with Template Literls: ${a+b}`); // back tick ``, dollar sign $, curly braces {}



/**
 * 3. Comparison Operators
 * ============================================================================================================================================
 */
5 == '5'; // >> true (compares value, not type)
0 == ' '; // >> true
0 == false; // >> true
null == undefined; // >> true

5 === '5'; // >> false (compares type & value)
0 == ' '; // >> false
0 == false; // >> false
null == undefined; // >> false



/**
 * 4. Comparison for Non-numbers -> unicodes for given letter are compared (a->61, b->62... A->41, B->42...)
 * ============================================================================================================================================
 */
'a' < 'A'; // >> false
'a' < 'b'; // >> true
'*' > '$'; // >> true



/**
 * 5. Conditional Statements
 * ============================================================================================================================================
 */
let age = 30;
if(age > 18){
    console.log("Eligile to Vote")
}

let signal = "red";

if(signal==="red") {
    console.log("Stop");
}else if(color==="green") {
    console.log("Go");
}else if(color==="yellow") {
    console.log("Look");
}

//Practice Qs
/**
 * 1. if string starts with 'a' & length > 3, then it'a a "good string"
 * ============================================================================================================================================
 */

let string = "ankush"
if(string[0] === 'a' && string.length > 3) {
    console.log("Good String");
}else {
    console.log("Bad String");
}


/**
 * 6. truthy & falsy -> Everything in JS is treu & false (in boolean context)
 * ============================================================================================================================================
 */
if(true) {
    console.log("true") // Everything else except falsy values
}else {
    console.log("false"); // falsy values -> false, 0, -0, 0n(BigInt value), ""(empty string), null, undefined, NaN
}


/**
 * 7. Switch Statement -> Used when we have some fixed values that need to compare to.
 * ============================================================================================================================================
 */
let color = "red";

switch(color) {
    case "red" : console.log("stop");
    break;
    case "yellow" : console.log("slow down");
    break;
    case "green" : console.log("go");
    break;
    default : console.log("Broken light");
}


/**
 * 8. Alert -> Display an error message on the page
 * ============================================================================================================================================
 */
alert("something is wrong");
console.error("this is an error message");
console.warn("this is a warning message");


/**
 * 9. Prompts -> Displays a dialoge box that asks user for some input
 * ============================================================================================================================================
 */
prompt("Enter your name:");
//Example:
let firstName = prompt("Enter your name:");
console.log(firstName);