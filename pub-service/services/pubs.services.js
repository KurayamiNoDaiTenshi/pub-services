const pubs = require('../mocks/pubs.json');
const _ = require('lodash');

function listAllPubs() {
    return pubs;
}

function listOpenPubs(days) {
    return _.filter(pubs, function (pub) {
       return _.includes(pub.openDays, days);
    });
}
module.exports = {
    listAllPubs,
    listOpenPubs
};