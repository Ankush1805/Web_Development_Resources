/**
 * 'this' -> keyword refers to an object that is executing the current piece of code
 * ============================================================================================================================================
 * 
 * When a function is called as a method of an object, this refers to the object itself
 */

const student = {
    name: "Ankush",
    eng: 90,
    hindi: 90,
    marathi: 90,

    getAvg() {
        console.log(this);
        let avg = (this.eng + this.hindi + this.marathi)/3;
        console.log(avg);
    }
}

function getAvg() {
    console.log(this);
}


/**
 * Arrow Functions -> Arrow functions provide a shorter syntax compared to traditional function expressions
 * ============================================================================================================================================
 */

const sum = (a,b) => {
    console.log(a + b);
} 

const square = (n) => {
    console.log(n*n);
}

const hello = () => {
    console.log("Hello!!!")
}


/**
 * Arrow function with implicit return (single expression) -> 
 * ============================================================================================================================================
 * If the function body contains only a single expression, you can omit the curly braces and the return keyword
 */

const add = (a,b) => a + b;


/**
 * Set Timeout -> Executes a function once after a specified delay (inbuilt function of window object)
 * ============================================================================================================================================
 * 
 * setTimeout (function, timeout);
 */

const timeoutMsg = () => console.log("Delayed message");

console.log("start");
setTimeout(timeoutMsg, 4000); // This function will execute after 4 seconds
console.log("end");


/**
 * Set Interval -> Executes a function repeatedly, with a fixed time delay between each call
 * ============================================================================================================================================
 */

const intervalMsg = () => console.log("Interval message");
let id = setInterval(intervalMsg, 5000); // This function will execute after every 5 seconds until the interval is cleared
clearInterval(id); // comment this line to check interval msg


/**
 * 'this' with Arrow Functions ->
 * ============================================================================================================================================
 */

const classStudent = {
    name: "Ankush",
    marks: 90,
    property: this, // global scope i.e. window object

    // Function -> In a normal function, 'this' refers to its own object context (here it will be classStudent)
    getName: function () {
        console.log(this); // object scope i.e. classStudent
        console.log(this.name);
    },

    // Arrow Function -> in an arrow function, 'this' refers to the lexical scope of its parent (where the arrow function is defined), 
    //                   which in the global context would be the Window object
    getMarks: () => {
        console.log(this); // parent's scope i.e. global scope i.e. window object
        console.log(this.marks);
    },

    //Advantage of 'this' with arrow function
    getInfo1: function() {
        setTimeout(()=> {
            console.log(this); // classStudent >> 'this' refers to the lexical scope of its parent i.e. parent of function is classStudent
        }, 2000);
    },
    
    getInfo2: function() {
        setTimeout(function() {
            console.log(this); // window >> 'this' refers to its own object context i.e. object of setTimeOut function i.e. Window
        }, 2000);
    }
};

classStudent.getName();
classStudent.getMarks();



//Qs-1. arrow function that return square of 'n'
const retrunSquare = n => n*n;
console.log(retrunSquare(5)); // 5

//Qs-2. function that prints "Hello World" 5 times at intervals of 2 sec each

let printHelloMsg = setInterval(() => {
    console.log("Hello World")
}, 2000);

setTimeout(() => {
    clearInterval(printHelloMsg)
}, 10000);



