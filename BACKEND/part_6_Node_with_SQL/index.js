/**
 * npm init -y
 * npm i @faker-js/faker
 * index.js
 * npm i mysql2
 * npm i express
 * npm i uuid
 * npm i ejs
 */


const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require('method-override');

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method')); // override with POST having ?_method=PATCH

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); // Use app.set instead of app.use

const port = 8080;

app.listen(port, () => {
    console.log("SERVER STARTED");
    console.log(`listening to port ${port}`);
    console.log("TO STOP SERVER -> Press Ctrl+C");
});

// Home Route
// connection automatically ends when app.get() function ends
app.get("/", (req, res) => {
    // res.send("Welcome to Homepage!!!"); Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client occurs when you attempt to send a response to the client more than once in an Express route. This usually happens when res.send() is called multiple times
    let q = `SELECT count(*) FROM user`;
    try {
        connection.query(q, (err, result) => {
            if(err) throw err;
            // console.log(result); // result: array >> [{"count(*)":103}]
            // res.send(result); 

            // console.log(result[0]); // result: object >> {"count(*)":103}
            // res.send(result[0]);

            // console.log(result[0]["count(*)"]); // result : 103 
            // res.send("success"); // cannot pass int in send()

            let count = result[0]["count(*)"];
            res.render("home.ejs", {count});
        });
    } catch (err) {
        console.log(err);
        res.send("error in DB");
    }
});

// Show Route
app.get("/users", (req, res) => {
    let q = `SELECT * FROM user`;
    try {
        connection.query(q, (err, users) => {
            if(err) throw err;
            // console.log(result);
            // res.send(result);
            res.render("users.ejs", {users});
        });
    } catch(err) {
        console.log(err);
        res.send("error in DB");
    }
});

// Edit Route
app.get("/user/:id/edit", (req, res) => {
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}' `;
    try {
        connection.query(q, (err, result) => {
            if(err) throw err;
            let user = result[0];
            console.log(result[0]);
            res.render("edit.ejs", {user});
        });
    } catch(err) {
        console.log(err);
        res.send("error in DB");
    }
});

//Update (DB) Route
app.patch("/user/:id", (req, res) => {
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}' `;
    let {password : formPass, username : newUsername} = req.body;
    try {
        connection.query(q, (err, result) => {
            if(err) throw err;
            let user = result[0];
            if(formPass === user.password) {
                let q2 = `UPDATE user SET name = '${newUsername}' WHERE id = '${id}' `;
                connection.query(q2, (err, result) => {
                    if(err) throw err;
                    res.send(result);
                });
            } else {
                res.send("Incorrect Password")
            }
        });
    } catch(err) {
        console.log(err);
        res.send("error in DB");
    }
});

// Create a new user
app.get("/user/add", (req, res) => {
    res.render("add.ejs");
});

app.post("/user", (req, res) => {
    let {id, name, email, password} = req.body;
    try {
        let q = `INSERT INTO user (id, name, email, password) VALUES (?, ?, ?, ?)`;
        connection.query(q, [id, name, email, password], (err, result) => {
            if(err) throw err;
            console.log(result);
            res.send(result);
        });
    } catch (err) {
        console.log(err);
        res.send("error in DB");
    }
});

//Delete user
app.get("/user/:id/delete", (req, res) => {
    let {id} = req.params;
    let q = `SELECT * FROM user where id = '${id}' `;
    try {
        connection.query(q, (err, result) => {
            if(err) throw err;
            let user = result[0];
            res.render("delete.ejs", {user});
        });
    } catch (err) {
        res.send("some error with DB");
      }
});

app.delete("/user/:id/", (req, res) => {
    let { id } = req.params;
    let {password} = req.body;
    let selectQuery = `SELECT * FROM user WHERE id = '${id}' `;
    try {
        connection.query(selectQuery, (err, result) => {
            if(err) throw err;
            let user = result[0];
            
            if(password === user.password) {
                let deleteQuery = `DELETE FROM user WHERE id='${id}'`; //Query to Delete
                connection.query(deleteQuery, (err, result) => {
                    if (err) throw err;
                    else {
                        console.log(result);
                        console.log("deleted!");
                        res.redirect("/users");
                    }
                });
            } else {
                res.send("WRONG Password entered!");
            }
        });
    } catch (err) {
        console.log(err);
        res.send("error in DB");
    }
});




/** Using Faker
 * ============================================================================================================================================
 */
let getRandomUser = () => {
    return {
      id: faker.string.uuid(), //  faker.datatype.uuid() is deprecated since v8.0 and will be removed in v9.0. Please use faker.string.uuid() instead
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    //   avatar: faker.image.avatar(),
    //   birthdate: faker.date.birthdate(),
    //   registeredAt: faker.date.past(),
    };
  }

//   console.log(getRandomUser());


/** MySQL2 Package
 * ============================================================================================================================================
 * To connect Node with MySQL
 */

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password : 'Ankush18@mysql'
  });

// Simple query
//   let query = "SHOW TABLES"
//   try {
//     connection.query(query, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         console.log(result.length);
//         console.log(result[0]);
//         console.log(result[1]);
//       });
//   } catch (err) {
//     console.log(err);
//   }


// INSERT INTO user ->
// let query = "INSERT INTO user (id, name, email, password) VALUES (?, ?, ?, ?)";
// let user = ["123", "123_newuser", "abc@gmail.com", "abc"];
// try {
//     connection.query(query, user, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//     })
// } catch (err) {
//     console.log(err);
// }

// let query = "INSERT INTO user (id, name, email, password) VALUES ?"; // `?` -> passing single user data at a time
// let users = [
//     ["456", "456_newuser", "def@gmail.com", "def"],
//     ["789", "789_newuser", "ghi@gmail.com", "ghi"],
// ];
// try {
//     connection.query(query, [users], (err, result) => {
//         if(err) throw err;
//         console.log(result);
//     })
// } catch (err) {
//     console.log(err);
// }

//INSERT in bulk
let getBulkUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ]
};

let query = "INSERT INTO user (id, name, email, password) VALUES ?"; // `?` -> passing single user data at a time
let data = [];

for(let i=0; i<100; i++) {
    data.push(getBulkUser()); //generating random 100 users
}

// try {
//     connection.query(query, [data], (err, result) => {
//         if(err) throw err;
//         console.log(result);
//     });
// } catch(err) {
//     console.log(err);
// }
  

// connection.end(); // to close coonection



  /** Using SQL from CLI
   * ==========================================================================================================================================
   * enter in TERMINAL ->
   * WINDOWS: mysql -u root -p
   * MAC: /usr/local/mysql/bin/mysql -u root -p
   * 
   * enter PASSWORD
   * 
   * end connection: quit;
   * 
   * `/usr/local/mysql/bin/mysql` OR `mysql -u root -p` : This is the path to the MySQL client executable.
   * `-u root` : This specifies the username to connect with, in this case, root.
   * `-p` : This prompts for the password associated with the root user.
   */


  /** source.schema.sql ->
   * ==========================================================================================================================================
   */

