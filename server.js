const inquirer = require('inquirer');
const util = require('util')
const figlet = require('figlet');
const consoleTable = require('console.table');
const sequelize = require('./config/connection')
const question = require('./js/questions')
const {db, query} = require('./js/querys')
// const app = express()
const port = process.env.PORT || 3001

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

//use figlet to print 'Employee Tracker' logo
const printTitle = async () => {
    const figletPromise = util.promisify(figlet.text)
    const data = await figletPromise('Employee Tracker Eh', {
        font: 'speed',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 100,
        whitespaceBreak: true
    })
    console.log(data)
}

const choices = async (result) => {
    switch (result.choice) {
        case 'View all departments':
            await query.viewAllDepartments();
            menu();
            break;
        case 'View all roles':
            await query.viewAllRoles();
            menu();
            break;
        case 'View all employees':
            await query.viewAllEmployees();
            menu();
            break;
        case 'Add a department':
            await query.addDepartment();
            menu();
            break;
        case 'Add a role':
            await query.addRole();
            menu();
            break;
        case 'Add an employee':
            await query.addEmployee();
            menu();
            break;
        case 'Update an employee role':
            await query.updateEmployee();
            menu();
            break;
        case 'View budget':
            await query.viewBudget();
            menu();
            break;
        case 'Delete a department':
            await query.deleteDep();
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
