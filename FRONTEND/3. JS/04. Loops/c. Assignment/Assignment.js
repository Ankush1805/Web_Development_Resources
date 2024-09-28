// Qs-1
// delete all occurrences of '2'
let arr=[1,2,3,4,5,6,2,3];
for (let i=0; i < arr.length; i++) {
    if(arr[i] == 2) {
        arr.splice(i, 1);
    }
        
}
console.log(arr);

// Qs-1
// find no of digits
let number = 287152;
let count = 0;
let temp = number;

while(temp > 0) {
    count++;
    temp = Math.floor(temp/10);
}
console.log(`count : ${count}`)

//Qs-3
// find the sum of digits
let num = 287152;
let temp2 = num;
let sum = 0;
while(temp2 > 0) {
    let digit = temp2 % 10;       // Extract the last digit
    sum = sum + digit;            // Add the digit to the sum
    temp2 = Math.floor(temp2/10); // Remove the last digit from temp
}
console.log(`Sum : ${sum}`);

//Qs-4
// factorial of a number
let n = 5;
let fact = 1;
for(let i=1; i <= n;  i++) {
    fact = fact * i;
}
console.log(`factorial of ${n} : ${fact}`);


//Qs-5
// largest number in an array
let arr2 = [1,2,3,4,5];
let largestNo = 0;
for(let i=0; i < arr2.length; i++) {
    if(largestNo < arr2[i]) {
        largestNo = arr2[i];
    }
}
console.log(`largest no : ${largestNo}`);