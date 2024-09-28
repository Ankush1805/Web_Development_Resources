/**
 * Middleware in Express are functions that come into play after the server receives the request & before the response  is sent to the client
 * 
 * Middleware can perform following tasks:
 * execute any code
 * make changes to the request & response objects
 * end the request-response cycle
 * call the next middleware function in the stack
 */

const express = require("express");
const app = express();

app.listen(8080, () => {
    console.log("server listening to port: 8080");
});

/** Middleware function
 * ============================================================================================================================================
 * /
// app.use((req, res, next) => {
//     console.log("Hi, I am 1st Middleware.");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("Hi, I am 2nd Middleware.");
//     next();
// });


/** Utility Middleware ->> logger (similar as morgan)
 * ============================================================================================================================================
 */
// app.use((req, res, next) => {
//     // console.log(req);
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// });

// app.get("/", (req, res) => {
//     res.send("Hi, I am root.");
// });

// app.get("/random", (req, res) => {
//     res.send("Hi, I am random page.");
// });

/** API Token as Qurery String
 * ============================================================================================================================================
 */
// app.use("/api", (req, res, next) => {
//     let {token} = req.query;
//     if(token === "giveaccess") {
//         next();
//     } else {
//         res.send("ACCESS DENIED");
//     }
// });

// app.get("/api", (req, res) => {
//     res.send("Logged in successfully");
// });


/** Passing Multiple Middlewares
 * ============================================================================================================================================
 */

const checkToken = (req, res, next) => {
        let {token} = req.query;
        if(token === "giveaccess") {
            next();
        } else {
            res.send("ACCESS DENIED");
        }
};

app.get("/api", checkToken, (req, res) => {
    res.send("Logged in successfully");
});


/** Handling Errors
 * ============================================================================================================================================
 */
app.get("/wrong", (req, res) => {
    abcd = abcd;
});

app.use((req, res) => {
    res.status(404).send("Page  not found !!!")
});
