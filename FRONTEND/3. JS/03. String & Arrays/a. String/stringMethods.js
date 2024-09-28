/**
 * 1. Trim Method -> Trims whitespaces from both end of string & return a new one
 * ============================================================================================================================================
 */
let str1 = "   Hello  !!!   ";
str1.trim(); // >> 'Hello !!!' -> it will only remove spaces om both end of string not from middle


/**
 * 2. Strings are immutable -> No chnages can be made to a string, whenever we try to make any change, a new string is created & old remains same
 * ============================================================================================================================================
 */


/**
 * 3. indexOf()
 * ============================================================================================================================================
 */
let str2 = "ILoveCoding";
str2.indexOf("I"); // 1
str2.indexOf("J"); // -1
str2.indexOf("Coding"); // 5



/**
 * 4. Method Chaining -> Using one method after another. Order of execution will be left to right.
 * ============================================================================================================================================
 */
let str3 = "    Method Chaining    ";
console.log(str3.trim().toUpperCase());
console.log(str3.trim().toLowerCase());



/**
 * 5. Slice Methods -> Returns a part of the original string as a new string
 * ============================================================================================================================================
 */
let str4 = "ILoveCoding";
console.log(str4.slice(5)); // slice from index 5 (method will assume ending index will be the length of index i.e. str4.length())
console.log(str4.slice(1,4)); // slice from index 1 to 4
// -ve value
console.log(str4.slice(-4)); // length-4 = 10-4 = 6




/**
 * 6. Replace -> Searches a value in the string & returns a new string with the value replaced
 * ============================================================================================================================================
 */
let str5 = "ILoveCoding";
console.log(str5.replace("Love","Do"));

let str6 = "CodingCodingCodingCoding";
console.log(str6.replace("Coding","Decode")) // only first occurence will get replaced



/**
 * 7. Repeat -> Returns a string with the number of copies of a string
 * ============================================================================================================================================
 */
let str7 = "Repeat";
console.log(str7.repeat(3));

