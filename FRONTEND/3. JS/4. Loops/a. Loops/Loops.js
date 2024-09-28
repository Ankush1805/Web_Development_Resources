/**
 * Loops -> use to iterate(repeat) piece of code
 * ============================================================================================================================================
 * 
 * for(initialization; condition; update) {
 *      // do something
 *    }
 */



/**
 * odd numbers from 1 to 15
 * ============================================================================================================================================
 */
for(let i=0; i<=15; i++) {
    if(i%2 != 0) {
        // console.log(i);
    }
}
//OR
for(let i=1; i<=15; i=i+2) {
    if(i%2 != 0) {
        // console.log(i);
    }
}
// backwards
for(let i=15; i>=1; i--) {
    if(i%2 != 0) {
        // console.log(i);
    }
}



/**
 * Even numbers from 2 to 10
 * ============================================================================================================================================
 */


for(let i=0; i<=15; i++) {
    if(i>=2) {
        if(i%2 == 0) {
            // console.log(i);
        }
    }
}


/**
 * Infinite Loops -> this case occurs when condition is not set or cannot be false
 * ============================================================================================================================================
 */

// for(let i=0; ; i++) { // condition is not set
//     // console.log(i);
// }

// for(let i=1; i>=0; i++) { // here condition i>=0 cannot be false as i=1
//     // console.log(i);
// }
    


// multiplication table
let n = 5;
for(let i=1; i<=10; i++) { 
    // console.log(n*i);
}


/**
 * While Loops
 * ============================================================================================================================================
 */
let i=1; //initialization
while(i<=10) { // condition
    // console.log(i);
    i++; // update
}

// break keyword
for(let i=1; i<=10; i++) {
    if(i==5) {
        break;
    }
    // console.log(i);
   
}


// Loops with Nested Arrays
let heroes = [
    ["ironman", "spiderman", "thor"],
    ["superman", "wonder woman", "flash"]
];

for(let i=0; i < heroes.length; i++) {
    // console.log(i, heroes[i]); // printing outer array
    for(let j=0; j < heroes[i].length; j++) {
        // console.log(heroes[i][j]); // printing nested array elements
    }
}



/**
 * for of loops (new in JS) similar to for-each loop
 * ============================================================================================================================================
 */
let fruits = ["apple", "banana", "orange"];
for( fruit of fruits) {
    console.log(fruit);
}

let user = "Ankush";
for(char of user) {
    console.log(char);
}

// Nested for-of loop
for(list of heroes) {
    for(hero of list) {
        console.log(hero);
    }
}


