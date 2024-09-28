//1. Arrays -> Linear collection of things
let students = ["aman", "naman", "chaman", 1, 2, 3]; // mixedArray
console.log(students[4]);
console.log(students[0][0]); // 0th, 0th >> a
console.log(students[0].length); // 4
// write students & enter on console
// typeOf students >> object


//2. Arrays are Mutable
let fruits = ["mango", "apple", "orange"];
fruits[0] = "banana";
console.log(fruits[0]); //  ['banana', 'apple', 'orange']
fruits[10] = "papaya"; // write fruits & enter on console >> ['banana', 'apple', 'orange', empty × 7, 'papaya']



//3. push -> add to end
let cars = ["audi", "bmw", "maruti"];
cars.push("tata"); // ['audi', 'bmw', 'maruti', 'tata']



//4. pop -> delete from end & returns it
cars.pop(); //  'tata' >> ['audi', 'bmw', 'maruti']


//5. unshift -> add to start
cars.unshift("ferrari"); //  ['ferrari', 'audi', 'bmw', 'maruti']


//6. shift -> delete from start & returns it
cars.shift(); // 'ferrari' >> ["audi", "bmw", "maruti"];


//7. indexOf -> return index of something
let primary = ["red", "yellow", "blue"];
primary.indexOf("yellow"); // 1
primary.indexOf("green"); // -1
primary.indexOf("RED"); // -1


//8. includes -> search for a value
primary.includes("red"); // true
primary.includes("green"); // false


//9. concat -> merge 2 arrays
let secondary = ["orange", "green", "violet"];
primary.concat(secondary); //  ['red', 'yellow', 'blue', 'orange', 'green', 'violet']


//10. reverse -> reverse an array
primary.reverse(); // ['blue', 'yellow', 'red']


//11. slice -> copies a portion of an array
let colors =  ['red', 'yellow', 'blue', 'orange', 'green', 'violet'];
colors.slice(); // it'll return the original array
colors.slice(2); // ['blue', 'orange', 'green', 'violet'] >> it'll return copy of array from index 2 
colors.slice(2,4); // ['blue', 'orange'] >> 4th index will not be included
colors.slice(-2); //  ['green', 'violet'] >> it'll return last 2 index 


//12. splice -> removes/replaces/add elements in place (makes changes inside original array)


// REMOVE 
colors.splice(4); // ['green', 'violet'] >> it'll delete element's from index 4
// Now original array will be >>  ['red', 'yellow', 'blue', 'orange']


colors.splice(0,1); // will delete from 0th to 1st index i.e. one element >> colors.splice(0,1);
// Now original array will be >> ['yellow', 'blue', 'orange']


//REPLACE
colors.splice(0, 1, "black", "grey"); // it'll replace element from 0th index i.e. ['yellow']
// Now original array will be >> ['black', 'grey', 'blue', 'orange']


//ADD
colors.splice(1, 0, "pink"); // it'll add element from 1st index
// Now original array will be >> ['black', 'pink', 'grey', 'blue', 'orange']


/**
 * NOTE:- splice(startIndex, deleteCount, element0.....elementN);
 * where,
 * deleteCount -> number of elements to be deleted, 
 * element0 -> element to be deleted
 * elementN -> element to be added
 */


//13. Sorting -> Sorts an array (bydefault ascending order)
let aplphabets = ["a", "d", "c", "b"];
aplphabets.sort(); // ['a', 'b', 'c', 'd']

let squares = ["25", "9", "16", "4"];
squares.sort(); //  ['16', '25', '4', '9'] >> internally numbers gets converted into string then sorts based on their UTF-16 code value


//14. Constant Arrays -> values can be changed but address of that constant array cannot be changed/assigned
const arr = [1, 2, 3];
randomArr = [4, 5, 6];
arr.push(4); //  [1, 2, 3, 4]
arr = randomArr; // TypeError: Assignment to constant variable.


//15. Nested/Multi-dimensional Arrays -> arrays of arrays
let nestArr = [[1,2], [3,4], [5,6]];
nestArr; // [Array(2), Array(2), Array(2)]
nestArr[0]; // [1, 2]
nestArr[0][1]; // 2


// Practice Qs -> tic-tac-toe game state
let game = [['x', null, 'o'],[null, 'o', null], ['o', null, 'x']];





