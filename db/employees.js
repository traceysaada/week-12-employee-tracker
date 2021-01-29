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

//write functions that will interact with data, one for every command use insert
//add departments
//add roles
//add employees

//use select * to get everything.
//view departments
//view roles
//view employees 



//uses update
//update employee roles
 
module.exports = employeesDB();

