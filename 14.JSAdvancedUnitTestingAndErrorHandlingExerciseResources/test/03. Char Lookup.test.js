const lookupChar = require('../03. Char Lookup');
const { assert } = require('chai');


describe('lookupChar test', () => {
    it('Should we return string undefint', () => {
        let str = 1;
        let index = 1;
        let expectedResult = undefined;
        let actualResult = lookupChar(str, index);
        assert.equal(actualResult, expectedResult);
    });
    it('Should we return index undefint', () => {
        let str ='Da';
        let index = '4';
        let expectedResult = undefined;
        let actualResult = lookupChar(str, index);
        assert.equal(actualResult, expectedResult);
    });
    it('Should we return Incoret string', () => {
        let str = '';
        let index = 5;
        let expectedResult = 'Incorrect index';
        let actualResult = lookupChar(str, index);
        assert.equal(actualResult, expectedResult);
    });
    it('Should we return Incorect index', () => {
        let str = 'aaaa';
        let index = -1;
        let expectedResult = 'Incorrect index';
        let actualResult = lookupChar(str, index);
        assert.equal(actualResult, expectedResult);
    });
    it('Should we return valid', () => {
        let str = 'Abv';
        let index = 1;
        let expectedResult = 'b';
        let actualResult = lookupChar(str, index);
        assert.equal(actualResult, expectedResult);
    });
    it('Should we floatpoint index', () => {
        let str = 'aaaa';
        let index = 1.25;
        let expectedResult = undefined;
        let actualResult = lookupChar(str, index);
        assert.equal(actualResult, expectedResult);
    });
});

// function lookupChar(string, index) {
//     if (typeof(string) !== 'string' || !Number.isInteger(index)) {
//         return undefined;
//     }
//     if (string.length <= index || index < 0) {
//         return "Incorrect index";
//     }

//     return string.charAt(index);
// }
// •	Returning undefined
// •	Returning an empty string
// •	Returning the char at the specified index
