const connection = require("./connection")
//write functions that will interact with data, one for every command use insert
//add departments //add roles //add employees
class DatabaseQueries {
    constructor(connection){
        this.connection = connection
    }
    getAllDepartments(){
        return this.connection.query("SELECT * FROM department"); 
    }
    getAllRoles(){
        return this.connection.query("SELECT * FROM role");
    }
    getAllEmployees(){
        return this.connection.query("SELECT * FROM employee");
    }
    getAllEmployeesByManager_id(){
        return this.connection.query("SELECT * FROM manager_id");
    }
    addNewDepartment(newDepartment){
        return this.connection.query("INSERT INTO department SET ?", newDepartment);
    }
    addNewEmployee(NewEmployee){
        return this.connection.query("INSERT INTO employee SET ?", NewEmployee)
    }
    addNewRole(NewRole){
        return this.connection.query("INSERT INTO role SET ?", NewRole)
    }

    upDateEmployeeRole(NewRole){
        return this.connection.qyery("INSERT INTO employee SET ?", NewEmployeeRole)
    }
//use select * to get everything.//view departments //view roles //view employees 

}

//uses update //update employee roles

module.exports = new DatabaseQueries(connection); 














