const connection = require("./connection")

class DatabaseQueries {
    constructor(connection){
        this.connection = connection
    }
    getAllDepartments(){
        return this.connection.query("SELECT * FROM department"); 
    }
}

module.exports = new DatabaseQueries(connection); 
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
