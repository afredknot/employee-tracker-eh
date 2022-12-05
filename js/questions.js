class Menu {
  questionMenu() {
    return [{
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices:[
        "view all employees", 
        "Add Employee",
        "Update Employee Role",
        "View all Roles",
        "Add Role",
        "View All Departments",
        "Add Department",
        "Quit",
      ]

    }];
  }
  departmentMenu(){
    return [{
      type: "input",
      name: "name",
      message: "Please enter Department Name.",
      validate: function (input) {
        return !!input || " Enter the name of role";
    }
},
{
    type: "input",
    name: "name",
    message: "Enter Role Name?",
    validate: function (input) {
        return !!input || "Please enter the name of the role!";
    }
},
{
    type: "input",
    name: "salary",
    message: "What is the salary of the role?",
    validate: function (input) {
        return isNaN(parseInt(input)) ? "enter the salary as a number!" : true;
    }
},
{
    type: "list",
    name: "department",
    message: "Which department does this role belong to?",
    choices: department
}
]
}
employeeMenu(role, manager) {
return [
{
    type: "input",
    name: "first",
    message: "What's the employee's first name?",
    validate: function (input) {
        return !!input || "Please enter the first name!";
    }
},
{
    type: "input",
    name: "last",
    message: "What's the employee's last name?",
    validate: function (input) {
        return !!input || "Please enter the last name!";
    }
},
{
    type: "list",
    name: "role",
    message: "What's the employee's role?",
    choices: role
},
{
    type: "list",
    name: "manager",
    message: "Who is the employee's manager?",
    choices: manager
}
]
}
updateMenu(employee, role) {
return [
{
    type: "list",
    name: "name",
    message: "Which employee would you like to update?",
    choices: employee
},
{
    type: "list",
    name: "role",
    message: "What role would you like to assign the selected employee?",
    choices: role
}
]
}
selectDepMenu(department, option) {
return [
{
    type: "list",
    name: "name",
    message: `Which department would you like to ${option}?`,
    choices: department
}
]
}
deleteConfirm(depToDelete) {
return [
{
    type: "input",
    name: "confirm",
    message: `Delete ${depToDelete} department? All roles and employees inside will be deleted too. (y/n)`,
    validate: function (input) {
        return !!input || "Please make a choice!";
    }
},
]
}

}

const question = new Menu;

module.exports = question;
