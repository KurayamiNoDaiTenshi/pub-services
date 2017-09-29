const jsonData = require('../mocks/pubs.json');
const Pub = require('../models/Pub');
const _ = require('lodash');

function listAllPubs() {
    return _.forEach(jsonData,pub=>new Pub(pub))
}

function listOpenPubs(days) {
    return _.filter(listAllPubs(),pub=>_.includes(pub.openDays, days));
}
module.exports = {listAllPubs,listOpenPubs};