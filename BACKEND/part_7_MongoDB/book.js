const mongoose = require('mongoose');

main()
    .then((res) => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon'); // creating DB -> amazon
}

// Creatin Schema

// Method-1
// const bookSchema = new mongoose.Schema({
//     title: String,
//     author: String,
//     price: Number
// });

// Method-2 -> This method id generally used when we have more than one constrains
const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true, // SchemaType Option
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: 1,
        max: [1000, "Price is too high"], // custom message on error
    },
    discount: {
        type: Number,
        default: 0, // SchemaType Option
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"], // only given category will be allowed
    },
    genre: {
        type: [String], // ["comics", "superheroes", "fiction"]
    },
});

// creating collection
const Book = mongoose.model("Book", bookSchema); 

// Inserting Data
let book1 = new Book({
    title: "Half Girlfriend",
    author: "Chetan Bhagat",
    price: 500
});

// book1.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })


/**
 * This schema validations will only work at the time of insertion
 * 
 * To follow schema validation durin updation ->
 *
 * [options.runValidators] «Boolean» if true, runs update validators on this command. 
 * Update validators validate the update operation against the model's schema
 */

// For min price
// Book.findByIdAndUpdate("66a138667a6238e6a3727b22", {price: -500}, {runValidators: true}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err); //  errors: { price: ValidatorError: Path `price` (-500) is less than minimum allowed value (1) }
// });

Book.findByIdAndUpdate("66a138667a6238e6a3727b22", {price: 2000}, {runValidators: true}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err.errors.price.properties.message); // Price is too high (custom error message)
});