/** OOPS (Object Oriented Programming) ->
 * ============================================================================================================================================
 * To Structure our code -
 * - prototype
 * - New operator
 * - contructors
 * - classes
 * - keywords (extend, super) * 
 */


/** Prototype ->
 * ============================================================================================================================================
 * In JavaScript, prototypes are the mechanism by which objects inherit properties and methods from one another.
 * It is like a single `template object` that all objects inherit methods & properties from without having their won copy
 * 
 * Every JavaScript object has a prototype, which is also an object, and it serves as a blueprint for creating objects.
 * 
 * Prototype Chain:
 * When you try to access a property or method on an object, JavaScript first looks for it on the object itself.
 * If it doesn't find it, it looks for it on the object's prototype, and then on the prototype's prototype, and so on, 
 * until it reaches Object.prototype, which is the root of all objects. If the property or method is not found, undefined is returned.
 * 
 * All JavaScript objects have an internal property called `__proto__`, which points to their prototype
 */
let arr = [1, 2, 3];
console.log(arr); // refer prototype in console

console.log(arr.__proto__); // access to proto properties which inludes functions related to arr
arr.__proto__.push = (n) => {console.log(`pushing number : ${n}`);} // changing the push definition 
arr.push(1); // o/p -> pushing number : 1

// actual object
Array.prototype; 
String.prototype;


/** Factory functions ->
 * ============================================================================================================================================
 * a function that creates object
 * 
 * Disadvantag - individual copies are made for each object
 * 
 
function personMaker(name, age) {
    const person = {
        name: name,
        age: age,
    };
    return person
}

let person1 = personMaker("aman", 26); // individual copy is made
console.log(person1);
let person2 = personMaker("naman", 28); // individual copy is made
console.log(person2);

*/

/** Contructors ->
 * ============================================================================================================================================
 * Contructors are special function in JS
 * constructor function doesn't return anything & name start with capital
 * 
 * New opeartor ->
 * ============================================================================================================================================
 * The new operator lets us create an instance of a user-defined object type
 * or one of the built-in object types that has a constructor function
 

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function () {
    console.log(`Hi, i my name is ${this.name}`);
}

let person1 = new Person("aman", 26);
let person2 = new Person("naman", 28);

*/

/** Classes ->
 * ============================================================================================================================================
 * Classes are template for creating objects
 * The `constructor` method is special method of class for creating & initializing an object instance of that class
 */
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.type = "human";
    }

    talk() {
        console.log(`Hi, i my name is ${this.name}`);
    }
}

let person1 = new Person("aman", 26);
let person2 = new Person("naman", 28);


/** Inheritance ->
 * ============================================================================================================================================
 * Inheritance is a mechanism that allows us to create new classes on the basis of already existing classes
 */
class Student extends Person {
    constructor(name, age, marks) {
        super(name, age); // parent class constructor is being called
        this.marks = marks;
    }

    greet() {
        console.log("Good Morning Teacher !!!");
    }
}

let stu1 = new Student("aman", 14, 99);

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age); // parent class constructor is being called
        this.subject = subject;
    }

    greet() {
        console.log("Good Morning Students !!!");
    }
}

let t1 = new Teacher("chaman", 41, "Chemistry");
