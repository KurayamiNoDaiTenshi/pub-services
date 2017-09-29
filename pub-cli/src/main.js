const pubservices = require('../../pub-service/');
const moment = require('moment');
function getListPub(){
    console.log( pubservices.services.pubServices.list);
}
function getOpenPubs(){
    console.log(pubservices.services.pubServices.listOpenPubs(moment.format('dddd')));
}
export {getListPub,getOpenPubs}

