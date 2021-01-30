//all inquire to go in here
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const databaseQueries = require("./db/employeeDatabase")


function initialise(){
  console.log("...Loading...")
  runSearch();
}

//question prompts
async function runSearch() {
 const { options } = await inquirer
    .prompt([
      {
        type: "list",
        name: "options",
        message: "What would you like to do?",
        choices: [
          "View Departments",
          "View Roles",
          "View Employees",
          "view Employees by Manager",
          "Add Employee",
          "remove Employee",
          "Update Employee Role",
          "Add Department",
          "Add Role",
          "Exit",
        ],
      },
    ])
   console.log(options)
      switch (options) {
        case "View Departments":
          viewDepartments();
          console.log("departments")
          break;

        case "View Roles":
          viewRoles();
          break;

        case "view Employees.":
          viewEmployees();
          break;

        case "view Employees by Manager":
          viewEmployeesByManager();
          break;

        case "add Employees":
          addEmployee();
          break;

        case "remove Employee":
          removeEmployee();
          break;

        case "Update Employee Role":
          updateEmployeeRole();
          break;

        case "add Department":
          addDepartment();
          break;

        case "add Role":
          addRole();
          break;

        case "End session":
          endSession();
          break;
      }
 
}
//answer selections to move to relevant next stage ie roles or department etc
async function viewDepartments() {
 const allDepartments = await databaseQueries.getAllDepartments(); 
 console.table(allDepartments)
 runSearch();
    }
  


function viewEmployees() {
  let query =
    "SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id";
  query += "FROM EMPLOYEE";
  query += "INNER JOIN role ON employee = department_name";

  // need colums help not sure how to call query

  connection.query(query, function (err, res) {
    console.table("all Employees", res);
    runSearch;
  });
}

function viewEmployeesByManager() {
  console.log("view employees by Manager");
  let query =
    "SELECT manager_id, manager name, employee.first_name, employee.last_name";
  query += "FROM manager";
  query += "INNER JOIN employee ON manager.id = employee.manager_id";
  query += "ORDER BY manager.name";

  connection.query(query, function (err, res) {
    console.table("Employees By Manager", res);
    runSearch;
  });
}














initialise();