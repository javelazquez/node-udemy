require( 'colors');

const { inquirerMenu, pause } = require('./helpers/inquirer.js');

const main = async () => {
    let opt = await inquirerMenu();
    console.log({opt});

    await pause();
}


main();