const pubservices = require('../../pub-service/');
const moment = require('moment');
function getListPub(){
    console.log( pubservices.services.pubServices.listAllPubs());
}
function getOpenPubs(){
    console.log(pubservices.services.pubServices.listOpenPubs(moment.format('dddd')));
}
module.exports = {
    getListPub,
    getOpenPubs
};