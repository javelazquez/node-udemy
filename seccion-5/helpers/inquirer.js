const inquirer = require('inquirer');
require('colors');

const questions = [
    {
       type: 'list',
       name: 'option',
       message: 'Seleccione una opción: \n',
       choices: [
           {
               value: '1',
               name: 'Create tasks',
           },
           {
            value: '2',
            name: 'List tasks',
           }
       ]
    }
];

const questionsPause = [
    {
        type: 'input',
        name: 'enter',
        message: `Presione ${'enter'.green} para continuar`
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log("==========================".green);
    console.log("   Seleccione una opción".green);
    console.log("==========================\n".green);

    const {option} = await inquirer.prompt(questions);
    return option;
}

const pause = async () => {
    await inquirer.prompt(questionsPause);
}

module.exports = {
    inquirerMenu,
    pause,
}

