const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

const { v4: uuidv4 } = require('uuid'); // Create a UUID -> https://www.npmjs.com/package/uuid

const methodOverride = require('method-override'); // HTTP request override using a query value -> https://www.npmjs.com/package/method-override

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method')); // override with POST having ?_method=DELETE

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
    console.log(`listening to port: ${port}`);
});

let postsArr = [
    {   
        id: uuidv4(),
        username: "aman",
        content: "Coding" 
    },
    {
        id: uuidv4(),
        username: "naman",
        content: "Eating" 
    },
    {
        id: uuidv4(),
        username: "chaman",
        content: "Sleeping" 
    }
];

//Index Route
app.get("/posts", (req, res) => {
    res.render("index.ejs", {postsArr});
});

//Index Route
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

// Create Route
app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    let id = uuidv4();
    postsArr.push({id, username, content});
/**
* Redirects to the URL derived from the specified path, with specified status, a positive integer that corresponds to an HTTP status code.
* If not specified, status defaults to “302 “Found”.
*/ res.redirect("/posts");
});

// Show/View Route
app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = postsArr.find((p) => id === p.id);
    // res.send(post);
    res.render("show.ejs", {post});
});

//Update Route
app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    let post = postsArr.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});

// Edit Route
app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = postsArr.find((p) => id === p.id);
    res.render("edit.ejs", {post})
})


// Destroy Route
app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    postsArr = postsArr.filter((p)=> id !== p.id); // filter & get the posts which is != given id
    res.redirect("/posts");
});
