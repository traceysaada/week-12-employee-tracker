const mysql = require("mysql");
const util = require("util");
//first thing is to set up connection to database
const connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "Catherine62#",
  database: "employeesDB"
});

connection.connect();


connection.query = util.promisify(connection.query); 

module.exports = connection; 


