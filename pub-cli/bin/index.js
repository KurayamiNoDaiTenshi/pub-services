const program = require('commander');
const main = require('../src/main');
program
    .version('1.0.0')
    .option('-l, --list', 'Get the pubs list')
    .option('-o, --open', 'Get the open pubs\'s list')
    .parse(process.argv);
if (program.list) {
    main.getListPub();
}
if(program.open){
    main.getOpenPubs();
}