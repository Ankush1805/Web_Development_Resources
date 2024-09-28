// Qs-1.Square and sum the array elements using the arrow function and then find the average of the array
let arr1 = [1,2,3,4,5];

const square = arr1.map( (el) => el*el );
console.log(square); // [1, 4, 9, 16, 25];

let sum = square.reduce( (sum, el) => sum+el );
console.log(sum); // 55

let avg = sum/arr1.length;
console.log(avg); // 11


// Qs-2.Create a new array using the map function whose each element is equal to the original element plus 5
let arr2 = [1,2,3,4,5];

const newArr = arr2.map( (el) => el+5 );
console.log(newArr); // [6, 7, 8, 9, 10]


// Qs-3. Create a new array whose elements are in uppercase of words present in the original array
let arr3 = ["aman", "naman", "chaman"];

let uppercase = arr3.map( (el) => el.toUpperCase() );
console.log(uppercase); // ['AMAN', 'NAMAN', 'CHAMAN']


// Qs-4. Write a function called 'doubleAndReturnArgs' which accepts an array and a variable number of arguments.
// The function should return a new array with the original array values and all of the additional arguments doubled

function doubleAndReturnArgs(arr, ...args) {
    return [arr, ...args];
};

let arr4 = [1,2,3,4,5];

console.log(doubleAndReturnArgs(arr4, 6, 7, 8, 9, 10));


// Qs-5. Write a function called 'mergeObjects' that accepts two objects 
// and returns a new object which contains all the keys and values of the first object and second object

const mergeObjects = (obj1, obj2) => ({...obj1,...obj2});

mergeObjects({name: "Ankush", surname: "Nikure"}, {city: "Mumbai", job: "IT"});
console.log(mergeObjects({name: "Ankush", surname: "Nikure"}, {city: "Mumbai", job: "IT"}));


