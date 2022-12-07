const inquirer = require('inquirer');
const util = require('util')
const figlet = require('figlet');
const consoleTable = require('console.table');
const sequelize = require('./config/connection')
const question = require('./js/questions')
const {db, query} = require('./js/querys')




//use figlet to print 'Employee Tracker' logo
const printTitle = async () => {
    const figletPromise = util.promisify(figlet.text)
    const data = await figletPromise('Employee Tracker Eh', {
        font: 'weird',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 100,
        whitespaceBreak: true
    })
    console.log(data)
}

const choices = async (result) => {

    switch (result.choice) {
        case 'View All Departments':
            await query.viewAllDepartments();
            menu();
            break;
        case 'View all Roles':
            await query.viewAllRoles();
            menu();
            break;
        case 'View all employees':
            await query.viewAllEmployees();
            menu();
            break;
        case 'Add Department':
            await query.addDepartment();
            menu();
            break;
        case 'Add Role':
            await query.addRole();
            menu();
            break;
        case 'Add Employee':
            await query.addEmployee();
            menu();
            break;
        case 'Update Employee Role':
            await query.updateEmployee();
            menu();
            break;
        case 'Quit':
            db.end();
            break;
        default:
            console.log('Error');
            break;
    }
}

const menu = async () => {
    const result = await inquirer.prompt(question.questionMenu());
    choices(result);
}

const start = async () => {
   await printTitle();
    menu();
}

start();
