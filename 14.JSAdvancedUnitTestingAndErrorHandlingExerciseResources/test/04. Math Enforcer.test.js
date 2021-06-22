const mathEnforcer = require('../04. Math Enforcer');
const { assert } = require('chai');

describe('mathEnforcer', function () {
    describe('addFive', function () {
        it('should return correct result', function () {
            let notANum = '<';
            let actualResult = mathEnforcer.addFive(notANum);
            let expected = undefined;
            assert.equal(actualResult, expected);
        })
    });
    describe('addFive float', function () {
        it('should return correct result', function () {
            let number = 5.50;
            let actualResult = mathEnforcer.addFive(number);
            let expected = 10.50;
            assert.equal(actualResult, expected);
        })
    });
    describe('addFive float', function () {
        it('should return correct result', function () {
            let number = -5.50;
            let actualResult = mathEnforcer.addFive(number);
            let expected = -0.50;
            assert.equal(actualResult, expected);
        })
    });
    describe('addFive', function () {
        it('should return correct result', function () {
            let number = 5;
            let actualResult = mathEnforcer.addFive(number);
            let expected = 10;
            assert.equal(actualResult, expected);
        })
    })
    describe('substarctTen', function () {
        it('should return correct substarctTen', function () {
            let number = 20;
            let actualResult = mathEnforcer.subtractTen(number);
            let expected = 10;
            assert.equal(actualResult, expected);
        })
    })
    describe('substarctTen', function () {
        it('should return correct substarctTen', function () {
            let number = -20;
            let actualResult = mathEnforcer.subtractTen(number);
            let expected = -30;
            assert.equal(actualResult, expected);
        })
    })
    describe('substarctTen float', function () {
        it('should return correct substarctTen', function () {
            let number = 20.5;
            let actualResult = mathEnforcer.subtractTen(number);
            let expected = 10.5;
            assert.equal(actualResult, expected);
        })
    })
    describe('substarctTen', function () {
        it('should return incorect substarctTen', function () {
            let number = '>';
            let actualResult = mathEnforcer.subtractTen(number);
            let expected = undefined;
            assert.equal(actualResult, expected);
        })
    })
    describe('number1 number2 sum', function () {
        it('should return sum', function () {
            let number1 = 10;
            let number2 = 30;
            let actualResult = mathEnforcer.sum(number1, number2);
            let expected = 40;
            assert.equal(actualResult, expected);
        })
    })
    describe('number1 number2 sum', function () {
        it('should return sum', function () {
            let number1 = 10.5;
            let number2 = 30;
            let actualResult = mathEnforcer.sum(number1, number2);
            let expected = 40.5;
            assert.equal(actualResult, expected);
        })
    })
    describe('number1 number2 sum', function () {
        it('should return sum', function () {
            let number1 = 10;
            let number2 = 30.5;
            let actualResult = mathEnforcer.sum(number1, number2);
            let expected = 40.5;
            assert.equal(actualResult, expected);
        })
    })
    describe('num1 undefined', function () {
        it('should return sum', function () {
            let number1 = '<';
            let number2 = 30;
            let actualResult = mathEnforcer.sum(number1, number2);
            let expected = undefined;
            assert.equal(actualResult, expected)
        })
    })
    describe('num2 undefined', function () {
        it('should return sum', function () {
            let number1 = 30;
            let number2 = '>';
            let actualResult = mathEnforcer.sum(number1, number2);
            let expected = undefined;
            assert.equal(actualResult, expected)
        })
    })
});
