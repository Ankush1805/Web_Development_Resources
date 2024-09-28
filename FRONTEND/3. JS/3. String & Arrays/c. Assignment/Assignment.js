let arr = [7, 9, 0, -2];

//Qs-1 get first 3 elements of array
console.log(arr.slice(0,3));

//Qs-2 get last 3 elements of array
console.log(arr.slice(arr.length-3));

//Qs-3 Check string is blank or not
let str1 = "";

if(str1.length == 0) {
    console.log("String is empty")
}else {
    console.log("String is not empty")
}

//Qs-4 
let str = "Character";
let index = 2;

if(str[index] == str[index].toLowerCase()) {
    console.log("Character is lowercase")
}else {
    console.log("Character is uppercase")
}

//Qs-5 

//Qs-6 check if an element exists in an array
let arr2 = ["one", "two", "three"];
let searchArr = "one";

if(arr2.includes(searchArr)) {
    console.log("Element exists in given array");  
}else {
    console.log("Element doesn't in given array");
}


