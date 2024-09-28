/**
 * start mongosh in the Terminal
 * npm init -y
 * npm i mongoose
 * touch index.js
 */


/** Installation & Setup
 * ============================================================================================================================================
 */
const mongoose = require('mongoose');

main()
    .then((res) => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


/** Schema
 * ============================================================================================================================================
 * Schema defines the shape of the documents within that collection
 */
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});


/** Models
 * ============================================================================================================================================
 * Model in mongoose is a class with which we construct documents
 * 
 * const modelName = mongoose.model("collectionName", schemaName); // where modelName = collectionName
 */
const User = mongoose.model("User", userSchema); // by default collection is created with some changes for e.g User -> users


/** Insert
 * ============================================================================================================================================
 */
const user1 = new User({
    name: "Adam",
    email: "adam@yahoo.com",
    age: 48
});

// user1.save();

const user2 = new User({
    name: "Eve",
    email: "eve@yahoo.com",
    age: 48
});

// user2.save() // save method returns -> Promise
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


//Insert in Multiple (usuall we insert one data at a time with express)

// User.insertMany([
// { name: "Tony", email: "tony@gmail.com", age: 50 },
// { name: "Bruce", email: "bruce@gmail.com", age: 47 },
// { name: "Peter", email: "peter@gmail.com", age: 30 }
// ]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });


/** Find ->
 * ============================================================================================================================================
 * Model.find() -> returns a Query object
 * Mongoose queries are not promises. But they have a .then()
 */

// User.find({}).then((res) => {
//     console.log(res);
// } ).catch((err) => {
//     console.log(err);
// } );

// User.find({age: {$gt: 47}}).then( (res) => {
//     console.log(res);
//     console.log(res[0]);
//     console.log(res[0].name);
// } ).catch( (err) => {
//     console.log(err);
// } );


// User.findOne({age: {$gte: 48}}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// User.findById("669fdd1bab17929b7cf83a6d").then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });


/** Update ->
 * ============================================================================================================================================
 */
// User.updateOne({name: "Bruce"}, {age: 49}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// User.updateMany({age: {$gt: 45}}, {age: 45}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// db.collection.findOneAndUpdate( filter, update, options ) -> 
// [options.new=false] «Boolean» if true, return the modified document rather than the original
// User.findOneAndUpdate({name: "Bruce"}, {age: 42}, {new: true}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });


/** Delete ->
 * ============================================================================================================================================
 */
// User.deleteOne({name: "Bruce"}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

// User.deleteMany({age: 45}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

// User.findOneAndDelete({name: "Peter"}, {new: true}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });


/** Schema Validations -> Rules for schema
 * ============================================================================================================================================
 */
// Refer book.js