const pubservices = require('../../pub-service/');
const moment = require('moment');
function getListPub(){
    return pubservices.services.pubServices.listAllPubs();
}
function getOpenPubs(){
    return pubservices.services.pubServices.listOpenPubs(moment.format('dddd'));
}
module.exports = {
    getListPub,
    getOpenPubs
};