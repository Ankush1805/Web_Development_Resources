// Qs-1. an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers
let arr =[1,2,3,4,5];

const arrayAverage = (arr) => {
    // Change let avg = ""; to let avg = 0; to ensure avg is initialized as a number, not a string
    let sum = 0;
    let avg = 0;
    for(let i=0; i<arr.length; i++) {
        sum = sum + arr[i];
    }
    avg = sum/arr.length;
    console.log(avg);
}

arrayAverage(arr);

// Qs-2. an arrow function named isEven() that takes a single number as argument and returns if it is even or not
let n = 0;

const isEven = (n) => {
    if(n%2 == 0) {
        console.log(`${n} is an even number`)
    } else {
        console.log(`${n} is not an even number`)
    }
}

isEven(n);