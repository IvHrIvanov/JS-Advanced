const createCalculator = require('../07.AddSubstract');
const { assert } = require('chai');

describe('tests', () => {
    it('return object', () => {
        let value = 0;
        let obj = {
            add: function (num) { value += Number(num); },
            subtract: function (num) { value -= Number(num); },
            get: function () { return value; }
        }
        let actualResult = createCalculator();
        assert.equal(actualResult, obj);

    })



})


// function createCalculator() {
//     let value = 0;
//     return {
//         add: function (num) { value += Number(num); },
//         subtract: function (num) { value -= Number(num); },
//         get: function () { return value; }
//     }
// }

// •	Return a module (object), containing the functions add(), subtract() and get() as properties
// •	Keep an internal sum which can’t be modified from the outside
// •	The functions add() and subtract() take a parameter that can be parsed as a number (either a number or a string containing a number) that is added or subtracted from the internal sum
// •	The function get() returns the value of the internal sum
