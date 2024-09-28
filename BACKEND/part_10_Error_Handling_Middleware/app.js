const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

app.listen(8080, () => {
    console.log("server listening to port: 8080");
});

/** Error Handling Middlewares
 * ============================================================================================================================================
 */
app.get("/err", (req, res) => {
    abcd = abcd;
});

app.use((err, req, res, next) => {
    // console.log(err);
    console.log("------ ERROR ------");
    next(err);
});

/** Custom Error Class
 * ============================================================================================================================================
 */
const checkToken = (req, res, next) => {
    let {token} = req.query;
    if(token === "giveaccess") {
        next();
    } else {
        throw new ExpressError(401, "ACCESS DENIED");
    }
};

app.get("/api", checkToken, (req, res) => {
res.send("Logged in successfully");
});

// app.use((err, req, res, next) => {
//     console.log("------ ERROR ------");
//     res.send(err);
// });

/** Default Status & Messages
 * ============================================================================================================================================
 */

// app.use((err, req, res, next) => {
//     let {status, message} = err;
//     res.status(status).send(message); // it'll throw status & message defined in ExpressError
// });

app.use((err, req, res, next) => {
    let {status = 500, message = "Something Went Wrong"} = err; // default status & message
    res.status(status).send(message);
});

/** Handling Async Errors
 * ============================================================================================================================================
 * refer part_8_MongoDB_with_Express
 */




