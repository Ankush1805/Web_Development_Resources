console.log('math.js loaded');

// const sum = (a,b) => a+b ;
// const diff = (a,b) => a-b ;
// const mul =  (a,b) => a*b ;
// const g = 9.8;
// const PI = 3.14;

// let obj = {
//     sum: sum,
//     diff: diff,
//     mul: mul,
//     g: g,
//     PI: PI,
// };

// module.exports = obj;

// OR
// ============================================================================================================================================

// module.exports = {
//     sum: sum,
//     diff: diff,
//     mul: mul,
//     g: g,
//     PI: PI,
// };

// OR
// ============================================================================================================================================

// module.exports.sum = (a,b) => a+b ;
// module.exports.diff = (a,b) => a-b ;
// module.exports.mul =  (a,b) => a*b ;
// module.exports.g = 9.8;
// module.exports.PI = 3.14;

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> commenting all above code as either `require` or `import` to be used >>>>>>>>>>>>>>>>>2>>>>>>>>>>>>>>>>>



/** import ->
 * ============================================================================================================================================
 * import is part of the ES6 module system, which is a more modern, standardized way of including modules
 * Supported in modern versions of Node.js (>= 12.17.0) and in browsers
 */

export const sum = (a,b) => a+b ;
export const diff = (a,b) => a-b ;
export const mul =  (a,b) => a*b ;
export const g = 9.8;
export const PI = 3.14;




