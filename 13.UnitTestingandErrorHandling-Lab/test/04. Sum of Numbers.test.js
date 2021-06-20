let sum = require('../04.sumNumbers.js');
const { assert } = require('chai');


describe('Take array of numbers as argument.Return sum of the values', () => {
    it('insert Array', () => {
        let numbersArr = [1, 2, 3, 4];
        let espectResul = 10;
        let actualResult = sum(numbersArr);
        assert.equal(actualResult, espectResul);
    })

});