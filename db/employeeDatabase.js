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
   
    addNewDepartment(newDepartment){
        return this.connection.query("INSERT INTO department SET ?", newDepartment);
    }
    addNewEmployee(NewEmployee){
        return this.connection.query("INSERT INTO employee SET ?", NewEmployee)
    }
    addNewRole(NewRole){
        return this.connection.query("INSERT INTO role SET ?", NewRole)
    }

    upDateEmployeeRole(EmployeeRole){
        return this.connection.qyery("UPDATE employee SET role_id = ?", EmployeeRole)
    }
//use select * to get everything.//view departments //view roles //view employees 

}

module.exports = new DatabaseQueries(connection); 














