//all inquire to go in here
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const databaseQueries = require("./db/employeeDatabase");
const { connection } = require("./db/employeeDatabase");


function initialise() {
  console.log("...Loading...");
  runSearch();
}

//question prompts
async function runSearch() {
  const { options } = await inquirer.prompt([
    {
      type: "list",
      name: "options",
      message: "What would you like to do?",
      choices: [
        "View Departments",
        "View Roles",
        "View Employees",
        "Add Department",
        "Add Employee",
        "Add Role",
        "Update Employee Role",
        "Exit",
      ],
    },
  ]);
  console.log(options);
  switch (options) {
    case "View Departments":
      viewDepartments();
      break;

    case "View Roles":
      viewRoles();
      break;

    case "View Employees":
      viewEmployees();
      break;

    case "Add Department":
      addDepartment();
      break;

      case "Add Employee":
        addEmployee();
        break;

    case "Add Role":
      addRole();
      break;

      case "Update Employee Role":
        updateEmployeeRole();
        break;
  
    case "End session":
      endSession();
      break;
  }
}
//answer selections to move to relevant next stage ie roles or department etc
async function viewDepartments() {
  const allDepartments = await databaseQueries.getAllDepartments();
  console.table(allDepartments);
  runSearch();
}
async function viewRoles() {
  const allRoles = await databaseQueries.getAllRoles();
  console.table(allRoles);
  runSearch();
}
async function viewEmployees() {
  const allEmployees = await databaseQueries.getAllEmployees();
  console.table(allEmployees);
  runSearch();
}

async function addDepartment() {
  const newDepartment = await inquirer.prompt([
    {
      name: "name",
      message: "What would you like to name the new department?",
    },
  ]);

  await databaseQueries.addNewDepartment(newDepartment);
  console.log(
    "Successfully created new department. Select View Departments to review"
  );
  runSearch();
}

//not yet working section
 async function addEmployee() {
  const NewEmployee = await inquirer.prompt([
    
    {
      name: "first_name",
      type: "input",
      message: "what is your first name",
    },

    {
      name: "last_name",
      type: "input",
      message: "what is your last name",
    },

    {
      name: "role_id",
      type: "list",
      message: "what role would you like your new employee to do?",
      choices: [1,2,3],
    },
    
  ]);
  
   await databaseQueries.addNewEmployee(NewEmployee);
  console.log(
    "Successfully created new employee. Select View Employees to review"
  );
  runSearch();
}


async function addRole() {
  const NewRole = await inquirer.prompt([
    {
      name: "title",
      message: "What would you like to name the new role?",
    },
    {
      name: "salary",
      message: "what salary would this role have",
    },
    {
      name: "department_id",
      type: "list",
      message: "what department would this be",
      choices: [1, 2, 3]
    },
  ]);

  await databaseQueries.addNewRole(NewRole);
  console.log(
    "Successfully created new role. Select View Roles to review"
  );
  runSearch();
}
// 
async function updateEmployeeRole() {
  const updatedRole = await inquirer.prompt([
 
      {
        type: "list",
        name: "employee",
        message: "Choose Employee you want to Update Role: ",
       
      },

      {
        type: "list",
        message: "New Role: ",
        name: "newRole",
        choices: [1, 2, 3]
      }
    ]);
    await databaseQueries.EmployeeRole(EmployeeRole);
  console.log(
    "Successfully update new role. Select View employees to review"
  );
  runSearch();
  }


initialise();
