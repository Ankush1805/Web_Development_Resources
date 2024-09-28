/**
 * NOTE ->
 * 
 callback is a function that is passed as an argument to another function or method
 
 Arrow function with a block body : Must include return to return the result.
 Ex- let even = nums.filter((num) => {
     return (num % 2 == 0);
     });

 Arrow function with a concise body : No return statement needed; the expression is implicitly returned.
 Ex- let even = nums.filter((num) => (num % 2 == 0));
*
 */



/**
 * forEach -> used for iterating over arrays and performing operations on each element
 * ============================================================================================================================================
 */
let arr = [1,2,3,4,5];

function print(element) {
    // console.log(element);
}

arr.forEach(print);

// OR

arr.forEach(function(element) { // callback
    // console.log(element);    
});

// OR

arr.forEach( (element) => { // callback
    // console.log(element);
})

// Objects

let student = [
    {
       name: "aman",
       marks: 69, 
    },
    {
        name: "naman",
        marks: 96,
    },
    {
        name: "chaman",
        marks: 99,
    }
];
// 'student' since we want to iterate over the 'student' array
student.forEach((student) => { // callback
    // console.log(student);
});

student.forEach((student) => { // callback
    // console.log(student.name);
});

student.forEach((student) => { // callback
    // console.log(student.marks);
});


/**
 * map -> used to create a new array by calling a provided function on every element in the calling array
 * ============================================================================================================================================
 * 
 * - higher-order function, meaning it takes another function as an argument and applies it to each element of the array.
 * - A common use case of map() is transforming the data in an array
 * - particularly useful because it maintains the same array length as the original array
 */
let cgpa = student.map((el) => { // callback
    return el.marks / 10; 
});
// NOTE -> arrow function with a block body -> In this syntax, you need to explicitly use the return statement to return the value.
//         Without the return statement, the function does not return anything (undefined), and the filter will not work as intended.

// cgpa is not a function
cgpa; // [6.9, 9.6, 9.9]


/**
 * filter -> used to create a new array that only includes the elements from the original array that meet a specific condition
 * ============================================================================================================================================
 * 
 * How It Works ->
 * Use filter() to test each element with a function you provide.
 * Keep only the elements that pass the test (the function returns true).
 * Create a new array with these elements.
 */

let nums = [1,2,3,4,5,6,7,8,9,10];

let even = nums.filter( (num) => (num % 2 == 0) ); // callback

// NOTE -> arrow function with a concise body -> implicitly returns the result of the expression.

// even is not a function
even; // [2, 4, 6, 8, 10] >> even no will return 'true'


/**
 * every -> (similar to AND operator) returns 'true' every element of array returns true for some function. Else retruns 'false'
 * ============================================================================================================================================
 */

nums.every( (num) => (num % 2 == 0) ); // 'false' >> as not every element in array is even no
even.every( (num) => (num % 2 == 0) ); // 'true'  >> as every element in array is even no


/**
 * some -> (similar to OR operator) returns 'true' when at least one element in an array return true for some function. Else retruns 'false'
 * ============================================================================================================================================
 */

nums.some( (num) => (num % 2 == 0) ); // 'true' >> as not every element in array is even no
even.some( (num) => (num % 2 == 0) ); // 'true'  >> as every element in array is even no

/**
 * reduce -> reduces the array to a single value
 * ============================================================================================================================================
 * 
 * arr.reduce( reducer function with 2 variables  for (accumulator, element) );
 */

let finalvalue = nums.reduce( (res, el) => {
    // console.log(res); // printing to check each result
    return res + el;
})

finalvalue; // 55 >> sum of all nums // we can also perfrom diff operations as below exapmle

// finding max from array
let maxValue = nums.reduce( (max, el) => {
    if(max <  el) {
        return el;
    }else {
        return max;
    }
});

maxValue; // 10
// console.log(maxValue);



// Qs-1. are numbers in array multiples of 10 (true or false)
let practiceQues = [5,10,15,20,25,30];
let ans1 = practiceQues.every( (el) => el % 10 == 0 );
ans1; // false
// console.log(ans1);

// Qs-2. min number in array
function getMin(arr) {
    let min = practiceQues.reduce( (min, el) => {
        if(min < el) {
            return min;
        } else {
            return el;
        }
    } );
    return min;
};

getMin(nums);
// console.log(getMin(nums));


/**
 * Default Parameters -> used to give default value to the arguments (always use default parameters at the end)
 */

function sum(a,b=3) {
    return a+b;
}
sum(2); // 'b' is not provided, so it defaults to '3' 
console.log(sum(2)); // 5


// NOTE -> If you set a default value for the parameter 'a' instead of 'b'
function sum(a = 2, b) {
    return a + b;
}
console.log(sum(3)); // Output: NaN

// 'a' is explicitly set to '3' because an argument is provided.
// 'b' is undefined because no second argument is provided.


/**
 * spread(...) -> to expand an iterable (arrays, strings) into multiple values using three dots '...' 
 */
let arr1 = [1,2,3];
// return min value using norma approach
Math.min(arr1[0],arr[1],arr[2]); // 1

let arr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
Math.min(...arr1); // 1
console.log(...arr1); // 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
console.log(..."ankush"); // a n k u s h

let name = [..."ankush"];
console.log(name); //  ['a', 'n', 'k', 'u', 's', 'h']

let oddNum = [1,3,5,7,9];
let evenNum = [2,4,6,8,0];

let integers = [...oddNum, ...evenNum];
console.log(integers); //  [1, 3, 5, 7, 9, 2, 4, 6, 8, 0]

// Object literals
const studentInfo = {
    email: "ankush@azafashions.com",
    password: "Ankush@123"
};

let studentInfoCopy = {...studentInfo, id: 801, city: "Mumbai"};
console.log(studentInfoCopy); // {email: 'ankush@azafashions.com', password: 'Ankush@123', id: 801, city: 'Mumbai'}

let arr3 = [1,2,3];
let obj1 = {...arr3};
console.log(obj1); // {0: 1, 1: 2, 2: 3}

let hello = "Hello";
let obj2 = {...hello};
console.log(obj2); // {0: 'H', 1: 'e', 2: 'l', 3: 'l', 4: 'o'}


/**
 * rest -> (opposite of spread) -> allows a function to take an indefinite number of arguments & bundle them in an array
 */
function sum(...args) { // incase we need to add additional parameters, add them in the start
    return args.reduce((sum, el) => sum + el);
};
sum(1,2,3); // 6

function min(...args) {
    return args.reduce((min, el) => {
        if(min > el) {
            return el;
        } else {
            return min;
        }
    });
};
min(1,2,3); // 1


/**
 * Destructing -> storing values of array into multiple variables
 */
let teamIndia = ["Rohit Sharma", "Virat Kohli", "Rishabh Pant", "Surya Kumar Yadav"];

let opener1 = teamIndia[0];
let opener2 = teamIndia[1];
console.log(opener1, opener2); // Rohit Sharma Virat Kohli

// OR

// let [opener1, opener1] = teamIndia;
// console.log(opener1, opener2); // Rohit Sharma Virat Kohli

// AND

// let [opener1, opener1, ...others] = teamIndia;

// Destructing on Objects ->
let {email, password} = studentInfo;
console.log(email); // ankush@azafashions.com
console.log(password); // Ankush@123

// storing key value in variable
let {email: user, password: pass} = studentInfo;
onsole.log(user); // ankush@azafashions.com
console.log(pass); // Ankush@123








