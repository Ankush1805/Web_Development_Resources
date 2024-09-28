/**
 * npm init -y
 * npm i express
 * npm i ejs
 * npm i mongoose
 * npm i method-override
 * touch index.js
 */

const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true})); // // Parse URL-encoded data >> required to parse data from req.body
app.use(methodOverride("_method")); // Use method override for PUT and DELETE

main()
    .then((res) => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
// }

// using fakewhatsapp DB for middlewarre handling async errors
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
  }

app.listen(port, () => {
    console.log(`listening to port: ${port}`);
});

app.get("/", (req, res) => {
    res.send("root is working");
});

// Index Route
app.get("/chats", asyncWrap(async (req, res, next) => {
    try {
        let chats = await Chat.find();
        // console.log(chats);
        // res.send("chats route working");
        res.render("index.ejs", {chats});
    } catch(err) {
        next(err);
    }
}));

// New Route
// app.get("/chats/new", (req, res) => {
//     // res.send("new chat route working");
//     res.render("new.ejs");
// });

// Create Route
app.post("/chats", asyncWrap(async (req, res, next) => {
    try {
        let {from, msg, to} = req.body; // need to parse data from req.body
    let newChat = new Chat({
        from: from,
        msg: msg,
        to: to,
        created_at: new Date
        });
    // console.log(newChat);
    
    await newChat.save();
    res.redirect("/chats");
    } catch(err) {
        next(err);
    }
}));

// NOTE - .then() method in JavaScript is used to handle promises and does not require await 
//        because it inherently manages asynchronous operations through its own syntax and behavior

// Edit Route
app.get("/chats/:id/edit", asyncWrap(async (req, res, next) => {
    try {
        let {id} = req.params;
        let chat = await Chat.findById(id);
        res.render("edit.ejs", {chat});
    } catch(err) {
        next(err);
    }
}));

// Update Route -> require methodOverride >> npm install method-override
app.put("/chats/:id", asyncWrap(async (req, res, next) => {
    try {
        let {id} = req.params;
        let {msg: newMsg} = req.body;
        let updatedChat = await Chat.findByIdAndUpdate(id, {msg: newMsg}, {runValidators: true, new: true});
        console.log("Updated Chat: ", updatedChat);
        res.redirect("/chats");
    } catch(err) {
        next(err);
    }
}));

// Destroy Route
app.delete("/chats/:id", asyncWrap(async (req, re, next) => {
    try {
        let {id} = req.params;
        let deletedChat = await Chat.findByIdAndDelete(id).then((res) => {
            console.log("Deleted Chat: ", res);
        });
        res.redirect("/chats");
    } catch(err) {
        next(err);
    }
}));


/** Handling Async Errors
 * ============================================================================================================================================
 */

// New Route
app.get("/chats/new", (req, res, next) => {
    try {
        // throw new ExpressError(404, "Page Not Found");
    res.render("new.ejs");
    } catch(err) {
        next(err);
    }
})

// NEW - Show Route
app.get("/chats/:id", asyncWrap(async (req, res, next) => {
    try {
        let { id } = req.params;
        let chat = await Chat.findById(id);
        if (!chat) {
            return next(new ExpressError(404, "Chat Not Found"));
        }
        res.render("edit.ejs", { chat });
    } catch (err) {
        next(err); // Pass any errors to the error-handling middleware
    }
}));

const handlevalidatorError = (err) => {
    console.log("This is a Validation Error. Please follow rules");
    console.dir(err.message);
    return err;
}

app.use((err, req, res, next) => {
    console.log(err.name);
    if(err.name === "ValidationError") {
        err = handlevalidatorError(err);
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    let{status = 500, message = "Something Went Wrong"} = err;
    res.status(status).send(message);
});


/** Using asyncWrap
 * ============================================================================================================================================
 */
function asyncWrap(fn) {
    return function(req, res, next) {
        fn(req, res, next).catch(err => next(err));
    }
}
