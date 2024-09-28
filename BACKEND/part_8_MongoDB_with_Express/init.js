/**
 * Initialize database
 */
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then((res) => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
// }

// creating fakewhatsapp DB for middlewarre handling async errors
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

// Inserting Data
// let chat1 = new Chat({
//     from: "neha",
//     to: "priya",
//     msg: "send me your exam sheets",
//     created_at: new Date() // is used to create a new instance of the JavaScript Date object (object represents the current date and time when the code is executed)
// });

// chat1.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// Inserting multiple Data
Chat.insertMany([
    {
        from: "rohit",
        to: "virat",
        msg: "we won the world cup!!!",
        created_at: new Date()
    },
    {
        from: "modi",
        to: "rahul",
        msg: "hi pappu",
        created_at: new Date()
    },
    {
        from: "ambani",
        to: "anita",
        msg: "where are you?",
        created_at: new Date()
    }
])