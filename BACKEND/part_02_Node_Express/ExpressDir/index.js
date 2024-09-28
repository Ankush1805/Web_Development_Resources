/** Library Vs Framework ->
 * ============================================================================================================================================
 * Library -> collecton of pre-written code that can be used to perform specific task
 * e.g- AXIOS
 * 
 * Framework -> collecton of pre-written code that provides a structure for developing software applications
 * e.g. - EXPRESS
 */



/** Express ->
 * ============================================================================================================================================
 * A Node.js application framework that hepls us to make web applications
 * It is used for server side programming
 * 
 * listens to incoming requests (GET/PUT/POST/DELETE)
 * parse incoming requests in Node.js form
 * match response with routes (wwww.google.com/search or wwww.google.com/help)
 * send suitable response
 * 
 * NOTE -> Express ia a package that exist in npm & can be installed using npm commands
 */



/** Creating a basic Express application >
 * ============================================================================================================================================
 * 
 * require("express") ->
 * This statement imports the Express module. 
 * The module exports a function, and this function is assigned to the `express` variable.
 * 
 * So, even though express is declared as a variable, it holds a reference to a function. 
 * When you invoke `express()`, you are calling this function, which in turn initializes a new Express application.
 * 
 * 
 * const app = express() -> 
 * This line creates an instance of an Express application by calling the `express()` function
 * The app object now has methods to define routes, middleware, and other application settings.
 * 
 * 
 * ports ->
 * ports are logical endpoints of a network connection tht is used to exchange information between a web server & a web client
 */

const express = require("express");
const app = express();

// console.dir(app); // type `node index.js` & enter in command line

let port = 3000;
// let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
    console.log("SERVER STARTED");
    console.log("TO STOP SERVER -> Press Ctrl+C");
});

/** 
app.use((request, response) => {
    console.log("request received");
    // response.send("this is a basic response");

    // JS Object form
    response.send({
        name: "apple",
        color: "red"
    });

    // HTML form
    response.send("<h1>Fruits</h1><ul><li>apple</li><li>orange</li></ul>");
});
*/



/** Routing ->
 * ============================================================================================================================================
 * it is a process of selecting a path for traffic in network or between or across multiple networks
*/
// root path
app.get("/", (request, response) => {
    response.send("hello, it's root path");
})

/**
app.get("/beetroot", (request, response) => {
    response.send("beetroot path");
})

app.get("/foot", (request, response) => {
    response.send("foot path");
})

// custom response when route does not match
app.get("*", (request, response) => {
    response.send("page does not exist");
})

// POST -> change request to POST & send in POSTMAN 
app.post("/", (request, response) => {
    response.send("send request");
}) 
*/



/** Nodemon -> To automatically restart server with code changes 
 * ============================================================================================================================================
 * package already exists in npm
 * install using npm command
 * we generally install & save it globally
 * 
 * to check version -> nodemon -v
 * to restar server -> nodemon index.js
 * 
 * e.g. when we make any changes in response, ther server restarts
 * 
 */



/** Path Parameter ->
 * ============================================================================================================================================
 * 
 
// http://localhost:3000/ankush
app.get("/:username/", (req, res) => {
    console.log(req.params);
    res.send(`Wel-Come to the page`);
});

// http://localhost:3000/ankush
app.get("/:username/", (req, res) => {
    let {username} = req.params;
    console.log(req.params);
    res.send(`Wel-Come to the page ${username}`);
});

// http://localhost:3000/ankush/123
app.get("/:username/:id/", (req, res) => {
    let {username, id} = req.params;
    console.log(req.params);
    res.send(`Wel-Come to the page @${username}`);
});
*/

// http://localhost:3000/ankush/123
app.get("/:username/:id/", (req, res) => {
    let {username, id} = req.params;
    let htmlStr = `<h1>Wel-Come to the HTML page @${username}</h1>`;
    console.log(req.params);
    res.send(htmlStr);
});



/** Query Strings
 * ============================================================================================================================================
 *
// http://localhost:3000/search?q=apple
// http://localhost:3000/search?q=apple&color=red
app.get("/search", (req, res) => {
    console.log(req.query);
    res.send("no results found");
});

 */

app.get("/search", (req, res) => {
    let {q} = req.query;
    if(!q){
        // http://localhost:3000/search?
        res.send(`<h1>No Results Found</h1>`); 
    }
    // res.send(`Search Results for query: ${q}`);
    res.send(`<h1>Search Results for query: ${q}</h1>`);
});
