const pubservices = require('../index').services.pubServices;
const chai = require('chai');
const expect = chai.expect;
const moment = require('moment');
describe('liste des pubs', function () {
    describe('lister tout les pubs', function () {
        it('devrais retourner la valeur 3 correspondant au nombre de pubs dans notre liste', function () {
            expect(pubservices.listAllPubs().length).to.equal(3);
        });
    });
    describe('lister les pubs ouvert un jour spécifique de la semaine', function () {
        describe('vérifier le paramêtre d\'entrée de la fonction listOpenPubs(day)',function(){
            it('devrais être un jour de la semaine écris en Anglais',function(){
                expect(moment().format('dddd')).to.be.oneOf(['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']);
            })

        });
        describe('lister tout les pubs ouvert le jeudi', function () {
            it('devrais retourner 2 correspondant au nombre de pubs ouvert le jeudi', function () {
                expect(pubservices.listOpenPubs('Thursday').length).to.equal(2);
            });
        });
        describe('lister tout les pubs ouvert le mardi', function () {
            it('devrais retourner 1 correspondant au nombre de pubs ouvert le mardi', function () {
                expect(pubservices.listOpenPubs('Tuesday').length).to.equal(1);
            });
        });
        describe('lister tout les pubs ouvert le samedi', function () {
            it('devrais retourner 3 correspondant au nombre de pubs ouvert le samedi', function () {
                expect(pubservices.listOpenPubs('Saturday').length).to.equal(3);
            });
        });
    });
});