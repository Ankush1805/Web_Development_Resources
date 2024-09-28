//Qs-1. function that returns array elements larger than a number
let arr = [1,2,3,4,5,6,7,8,9,10];
let num = 5;

function getElements(arr, num) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > num) {
            console.log(arr[i]);
        }
    }
}

console.log(getElements(arr,num));


//Qs-2. function to extract unique characters from a string 
let str = "abcdabcdefgggh";

function getUniqueChar(str) {
    let ans = "";
    for(let i=0; i<str.length; i++) {
        let currChar = str[i];

        if(ans.indexOf(currChar) == -1) {
            ans = ans + currChar;
        }
    }
    return ans;
}

console.log(getUniqueChar(str));




// Qs-3. returns the longest country name
let country = ["Australia", "Germany", "United States of America"];

function getLongestCountryName(country) {
    let longestCountryName = "";
    for (let i = 0; i < country.length; i++) {
        if (country[i].length > longestCountryName.length) {
            longestCountryName = country[i];
        }
    }
    
    return longestCountryName;
}

console.log(getLongestCountryName(country));  // Outputs: "United States of America"


//Qs-4. count the number of vowels in a String
const vowels = ['a','e','i','o','u','A','E','I','O','U'];
let string = "Ankush";

function countVowel(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

console.log(countVowel(string));  // Outputs: 2

