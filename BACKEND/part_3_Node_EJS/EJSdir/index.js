/** 
 * npm init -y
 * npm i express
 * node i ejs
 */



/** Templating with EJS (Embedded Javascript Templates) ->
 * ============================================================================================================================================
 * EJS is a simple templating language that lets us generate HTML markup with plain JS
 * 
 * __dirname -> current working directory
 * /views -> views folder
 * 
 * by setting views using `path.join()`, we can run `index.js` from any directory
 * e.g. -> PS C:\Users\Ankush\Desktop\WebDevelopment\BACKEND>  nodemon part_3_Node_EJS/EJSdir/index.js
 */

const express = require("express");
const app = express();
const path = require("path"); // requiring path package

const port = 8080;

app.listen(port, () =>{
    console.log("SERVER STARTED");
    console.log(`listening to port ${port}`);
    console.log("TO STOP SERVER -> Press Ctrl+C");
});



/** Serving Static Files -> 
 * ============================================================================================================================================
 * app.use(express.static(FOLDER_NAME)) -> serves static files such as HTML, CSS, JavaScript, images, etc., from a specified directory 
 */
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "/public/css"))); // view files from any directory to execute
app.use(express.static(path.join(__dirname, "/public/js"))); // view files from any directory to execute




/** Using EJS
 * ============================================================================================================================================
 * render is used to send big file like templates (HTML code)
 */
app.set("view engine", "ejs"); //we can directly use ejs unlike express bcuz ejs package is internally aquired by express

// views directory -> 
app.set("views", path.join(__dirname, "/views")); 

// express will by default search view folder to locate home.ejs file
app.get("/", (req, res) => {
    res.render("home.ejs")  // express searches files based on name (it'll work even if we don't add extension `.ejs`)
});


/** Interpolation Syntax ->
 * ============================================================================================================================================
 * Interpolation refers to embedding expressions into marked up text
 */


/** Passing data to EJS
 * ============================================================================================================================================
 * 
// Step-1
   <!-- <h1>Dice value: <%= Math.floor(Math.random() * 6) + 1 %> </h1> -->
app.get("/rolldice", (req, res) => {
    res.render("rolldice.ejs");
});

// Step-2
<!-- <h1>Dice value: <%= num  %></h1> -->
app.get("/rolldice", (req, res) => {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", {num: diceValue});
});

*/

// Step-2
app.get("/rolldice", (req, res) => {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", {diceValue});
});



/** Activity ->
 * ============================================================================================================================================
 * create a basic template for instagram page based on route -> /ig/:username
 * 
 * // Activity-1
 * <h2>This page belongs to @<%= username %> </h2>
    <button>Follow</button>
    <button>Message</button>
    <h3>Followers</h3>
    <ul>
       <% for(name of followers){ %>
       <li> <%= name %> </li>
       <% } %>
    </ul>
 * 
 * app.get("/ig/:username", (req, res) => {
    const followers = ["aman", "naman", "chaman"];
    let {username} = req.params; // accessing username from the route
    console.log(username);
    res.render("instagram", {username, followers});
});
 * 
 */

// Activity-2
app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    const instaData = require("./data.json");
    let data = instaData[username];
    console.log(data);
    if(data){
        res.render("instagram.ejs", {data});
    } else {
        res.render("error.ejs");
    }
});


/** Includes ->
 * ============================================================================================================================================
 * to create sub-template (template inside template)
 * 
 * <%- include("includes/head.ejs") %>
 * <%- include("includes/footer.ejs") %>
 */

