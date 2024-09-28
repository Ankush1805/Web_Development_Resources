/**
 * `index.js` file acts as an entry point for your modules, simplifying the process of importing multiple related modules elsewhere in your application
 * 
 * The index.js file imports the objects from `apple.js`, `banana.js`, and `orange.js` using `require()`, 
 * and then combines these objects into an array called `fruits`
 */

// const apple = require("./apple")
// const banana = require("./banana")
// const orange = require("./orange")

// let fruits = [apple, banana, orange];

// By exporting the `fruits` array from `index.js`, any other file that imports `index.js` will have access to this array.
// module.exports = fruits;



// Refracting old code 
// ============================================================================================================================================

import {apple} from "./apple.js"
import {banana} from "./banana.js"
import {orange} from "./orange.js"

export { apple, banana, orange };