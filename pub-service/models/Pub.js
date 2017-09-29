const _ = require('lodash');
const Beer = require('./Beer');
const Owner = require('./Owner');

class Pub {
    constructor(jsonData) {
        if (!_.isObject(jsonData) || !_.has(jsonData, 'name') || !_.has(jsonData, 'owner') || !_.has(jsonData, 'openDays') || !_.has(jsonData, 'openHours') || !_.has(jsonData, 'beers')) {
            throw new Error('donnée en entrée incorrect');
        }
        else {
            this.name = jsonData.name;
            this.owner = new Owner(jsonData.owner.name, jsonData.owner.firstname, jsonData.owner.email);
            this.openDays = jsonData.openDays;
            this.openHours = jsonData.openHours;
            this.beers = _.forEach(jsonData.beers,beer=>new Beer(beer.type, beer.name));

        }
    }

}
module.exports=Pub;