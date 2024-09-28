/** Object Literals -> used to store keyed collections & complex entities
 * ============================================================================================================================================
 *  
 * property => (key,value) pair
 * 
 * Objects are collection of properties
 * same data can be stored in Array & Object, but in Object we have better clarity against data
 */

let studentArr = ["Ankush","Nikure","Mumbai",30]; // in Array, we can only store values, don't have clarity
console.log(studentArr);


/**
 * We generally declare an object as const to ensure that it is not assigned a null value 
 * or swapped with another value during program execution
 */
const student = {                       // declaring object
    firstName: "Ankush",
    lastName: "Nikure",
    city: ["Mumbai", "Chandrapur"],     // we can store array in key value pair for an object
    age: 30
};
console.log(student);


/**
 * how to get values
 */
console.log(student["firstName"]);
console.log(student.lastName);
console.log(student.city);
console.log(student.city[0]);
console.log(student.city[1]);


/**
 * we cannot use variable with dot operator
 */
let property = "age";
console.log(student[property]); // 30
console.log(student.property); // undefined


/**
 * JS automatically converts objects keys to strings
 * Even if we declare number as a key, the number will be converted to string
 */
let obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
};
console.log(obj);
console.log(obj[1]);
console.log(obj[2]);
console.log(obj[true]);
console.log(obj[null]);
console.log(obj[undefined]);
// console.log(obj.1); // Unexpected number


/**
 * Add / Update value
 */
student.city[0] = "Navi Mumbai"; // changed city to "Navi Mumbai"
console.log(student.city[0]); 
console.log(student);

student.gender = "male"; // adding new property
console.log(student);

student.age = "31"; // updating age
console.log(student);


/**
 * delete property
 */
delete student.age;
console.log(student);


/**
 * Nested Object (Object of Objects)
 */
let classInfo = {
    aman: {
        grade: "A+",
        city: "Delhi"
    },
    naman: {
        grade: "A",
        city: "Pune"
    },
    chaman: {
        grade: "B+",
        city: "Mumbai"
    }
};
console.log(classInfo);
console.log(classInfo.aman);
console.log(classInfo.aman.city);
console.log(classInfo.naman.grade);

classInfo.chaman.city = "Noida";
console.log(classInfo.chaman.city);
console.log(classInfo.chaman);


/**
 * Array of Objects
 */
let player = [
    {
        name: "rohit sharma",
        sport: "cricket"
    },

    {
        name: "messi",
        sport: "football"
    },

    {
        name: "mary kom",
        sport: "boxing"
    }
];
console.log(player);
console.log(player[0]);
console.log(player[0].name);
console.log(player[0].sport);

player[1].name = "sania nehwal"
player[1].sport = "badminton";
console.log(player[1]);











