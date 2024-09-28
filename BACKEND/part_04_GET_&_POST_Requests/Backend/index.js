const express = require("express");
const app = express();
const port = 8080;

app.listen(port, () => {
    console.log("SERVER STARTED");
    console.log(`listening to port ${port}`);
    console.log("TO STOP SERVER -> Press Ctrl+C");
});

/** Handling POST requests ->
 * ============================================================================================================================================
 * Set up POST request route to get  some response
 * Parse POST request data
 * 
 * below are the middlewares used to parse data into readable form to express
 */
app.use(express.urlencoded({extended : true})); // express automatically parse the url encoded data
app.use(express.json()); // in case data is send in json format


/** GET & POST Requests ->
 * ============================================================================================================================================ 
 */

app.get("/register", (req, res) => {
    let {user, password} = req.query;
    res.send(`GET response. Welcome ${user}!`);
});

app.post("/register", (req, res) => {
   
    
    console.log(req.body); // Step-1 -> o/p will be `undefined` in terminal as express is unable to identify the the data (not in a readable form)
    // Step-2 -> Handling POST request -> o/p - { user: 'ankush', password: '123' }
    let {user, password} = req.body;
    res.send(`POST response. Welcome ${user}!`);
});







