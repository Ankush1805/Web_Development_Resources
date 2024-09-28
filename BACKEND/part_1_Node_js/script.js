/** Node.js ->
 * ============================================================================================================================================
 * NOTE ->
 * Run the Script from the Terminal: Ensure you're in the terminal (or command prompt) and not inside the Node.js REPL
 * If you're in the REPL, you can exit it by pressing `Ctrl + C` twice or by typing `.exit` and pressing Enter
 */

console.log("Hello, World!");

let n=5;

for(let i=1; i<=n; i++){
    // console.log("Hello Node.js", i);
}



/** process -> this object provides information about, & control over, the currect Node.js process
 * ============================================================================================================================================
 * process.argv - returns an array containing the command-line arguments passed when the Node.js process was launched
 * process.version - returns current Node.js nverion 
 * process.cwd(); - return current working directory
 * 
 * NOTE - 
 * To directly run commands on the terminal to get information about the current Node.js process without creating a script, 
 * you can use the Node.js REPL (Read-Eval-Print Loop)
 * 
 * or execute one-liner commands
 * e.g. node -e "console.log(process.argv)"
 * 
 * Start the Node.js REPL by simply typing `node` and pressing Enter
 * Exit it by pressing `Ctrl + C` twice or by typing `.exit` and pressing Enter
 */

let args = process.argv;

for(let i=0; i<args.length; i++){
    // console.log("Hello ", args[i]);
}



/** Export in Files ->
 * ============================================================================================================================================
 * 
 * module.exports -> 
 * is a special object in Node.js used to define what a module exports. 
 * It allows you to export functions, objects, or primitive values from a module so that other modules can import and use them using the `require()` function.
 * 
 *  require() -> a built-in function to include external modules that exist in separate files
 */

// const math = require("./math");
// console.log(math);
// console.log("Sum:", math.sum(2,2));



/** Export in directories ->
 * ============================================================================================================================================
 * The script.js file imports the fruits array from index.js and logs it to the console:
 */

// const fruitsInfo = require("./Fruits") // `require()` searches for `index.js` file in Fruits directory
// console.log(fruitsInfo);

// Refracting old code 
// ============================================================================================================================================
import {apple, banana, orange}  from "./Fruits/index.js";
console.log(apple);



/** NPM (Node Packaging Manager) ->
 * ============================================================================================================================================
 * npm is the standard package manager for Node.js (pre-installed with node -> type `npm` in command-line & enter to check)
 * 
 * library of packages -> helps manage JavaScript packages, making it easy to install, update, and manage dependencies in your projects
 * command-line tool -> provides a command-line interface (CLI) that allows us to interact with the package registry and manage their project dependencies
 * Versioning -> allows you to specify the versions of the packages you want to use. This helps ensure that your project works consistently across different environments.
 * 
 * Installing packages -> npm package <-package name->  
 * npm install figlet (npmjs.com -> search figlet) -> install in FigletDir -> add index.js -> add code in index.js -> run `node index.js` on command-line
 */
 


/** folders installed in FigletDir ->
 * ============================================================================================================================================
 * node_modules -> folder contains every installed dependency for our project
 * package-lock.json -> it records the exact version of every installed dependency, including its sub-dependencies & their version
 * 
 * package.json -> 
 * contains descriptive & fucntional metadata about a project, such as name, version & dependencies
 * enables npm to start your project, run scripts, install dependencies, publish to the NPM registry, and many other useful tasks
 * e.g
 * if node_modules folder gets deleted from the folder, the project will throw error when executed
 * in this case we can just install node_modules (npm install -> in command-line), this will install all the dependencies that are in package.json
 */



/** npm init <initializer> ->
 * ============================================================================================================================================
 * can be used to set up a new or existing npm package
 */



/** NOT ADVISABLE TO INSTALL PACKAGES GLOBALLY ->
 * ============================================================================================================================================
 * To download and install packages globally, on the command line, run the following command:
 * npm install -g <package_name>
 * 
 * will create a symbolic link from globally-installed package-name to node_modules/ of the current folder using the following command:
 * npm link <package_name>
 * 
 * NOTE -> to link, package-name is taken from package.json, not from the directory name.
 */



/** import
 * ============================================================================================================================================
 *  it will give below error in command-line
 *  To load an ES module, set "type": "module" in the package.json or use the .mjs extension
 * 
 * follow below steps to aboid error ->
 * 1. create package.json (npm init)
 * 2. set "type": "module" in the package.json
 * 
 * NOTE ->
 * ReferenceError: require is not defined in ES module scope, you can use import instead
 * This file is being treated as an ES module because it has a '.js' file extension
 */

import {sum} from "./math.js"; // mention .js
console.log(sum(1,2));

import {generate} from "random-words"
console.log("Random Words:", generate());



/** require vs import
 * ============================================================================================================================================
 * with import, we can selectively load only pieces we need, which can save memory
 * loading is asynchronous
 * 
 * but with require, we have to load complete file with
 * loading is synchronous
 */
