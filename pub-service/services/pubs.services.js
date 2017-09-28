var pubs = require('../mocks/pubs.json');
var moment = require('moment');
var _ = require('lodash');

function listAllPubs() {
    return pubs;
}

function listOpenPubs(days) {
    return _.filter(pubs, function (pub) {
       return _.includes(pub.openDays, days);
    });
}
module.exports = {
    listAllPubs: listAllPubs,
    listOpenPubs: listOpenPubs
};