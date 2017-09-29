const Person = require('./Person');
class Owner extends Person{
    constructor(name,firstname,email){
        super(name,firstname);
        this.email = email;
    }

}
module.exports = Owner;