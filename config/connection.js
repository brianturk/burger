// Set up MySQL connection.
const mysql = require("mysql");
var connection;

if (process.env.PORT != undefined) {
  // connection = mysql.createConnection({
    connection = mysql.createPool({
    host: "us-cdbr-iron-east-03.cleardb.net",
    port: 3306,
    user: "b5e28bf2c648c5",
    password: "a3eeb033",
    database: "heroku_ab909486931f64a",
    canRetry: true
  });
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burger_db"
  });
}


// Make connection.
connection.connect(err => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
