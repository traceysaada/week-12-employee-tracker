//all inquire to go in here
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const databaseQueries = require("./db/employeeDatabase");

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
        "View Employees by Manager",
        "Add Employee",
        "Remove Employee",
        "Update Employee Role",
        "Add Department",
        "Add Role",
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

    case "View Employees by Manager":
      viewEmployeesByManager();
      break;

    case "Add Employees":
      addEmployee();
      break;

    case "Remove Employee":
      removeEmployee();
      break;

    case "Update Employee Role":
      updateEmployeeRole();
      break;

    case "Add Department":
      addDepartment();
      break;

    case "Add Role":
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
async function viewEmployeesByManager() {
  const allEmployees = await databaseQueries.getAllEmployeesByManager();
  console.table(getAllEmployeesByManager);  
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
async function addEmployee() {
  const NewEmployee = await inquirer.prompt([
    {
      name: "name",
      message: "what role would you like your new employee to do?",
      choices: [
        "engineer",
        "administrator",
        "Closer"
      ]
    },
  ]);
//think I need code here to select employee role & put in correct department thik this might be a JOIN ??
  await databaseQueries.addNewEmployee(NewEmployee);
  console.log(
    "Successfully created new employee. Select View Employees to review"

  );
  runSearch();
}

initialise();
