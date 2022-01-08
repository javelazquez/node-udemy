require( 'colors');


const readMenu = () => {
    console.clear();
    console.log("==========================".green);
    console.log("   Seleccione una opción".green);
    console.log("==========================\n".green);
    console.log(`${ '1.'.green }  Create tasks`);
    console.log(`${ '2.'.green }  List tasks`);
    console.log(`${ '3.'.green }  List tasks compleated`);
    console.log(`${ '4.'.green }  List tasks pending`);
    console.log(`${ '5.'.green }  Compleate tasks`);
    console.log(`${ '6.'.green }  Delete tasks`);
    console.log(`${ '7.'.green }  Get out\n`); 
}

const selectOption = () => {
    readline.question('Seleccione una opción: ', (opt) => {
        console.log(opt);
        readline.close();
    });
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = {
    readMenu
}