// const rgbToHexColor = require('../06. RGB to Hex');
// const { assert } = require('chai');

// describe('Tests1', () => {
//     it('Red value is invalied', () => {

//         let green = 3;
//         let blue = 5;
//         let espectedResult = undefined;


//         assert.equal(rgbToHexColor('red', green, blue), espectedResult);
//         assert.equal(rgbToHexColor('', green, blue), espectedResult);
//         assert.equal(rgbToHexColor(' ', green, blue), espectedResult);
//         assert.equal(rgbToHexColor(null, green, blue), espectedResult);
//         assert.equal(rgbToHexColor(NaN, green, blue), espectedResult);
//         assert.equal(rgbToHexColor(undefined, green, blue), espectedResult);
//         assert.equal(rgbToHexColor(-5, green, blue), espectedResult);
//         assert.equal(rgbToHexColor(300, green, blue), espectedResult);

//     })
//     it('Green value is invalied', () => {
//         let red = 10;
//         let blue = 5;
//         let espectedResult = undefined;


//         assert.equal(rgbToHexColor(red, 'green', blue), espectedResult);
//         assert.equal(rgbToHexColor(red, ' ', blue), espectedResult);
//         assert.equal(rgbToHexColor(red, '', blue), espectedResult);
//         assert.equal(rgbToHexColor(red, null, blue), espectedResult);
//         assert.equal(rgbToHexColor(red, NaN, blue), espectedResult);
//         assert.equal(rgbToHexColor(red, undefined, blue), espectedResult);
//         assert.equal(rgbToHexColor(red, -5, blue), espectedResult);
//         assert.equal(rgbToHexColor(red, 300, blue), espectedResult);

//     });
//     it('Blue value is invalied', () => {
//         let red = 65;
//         let green = 3;
//         let espectedResult = undefined;

//         assert.equal(rgbToHexColor(red, green, 'green'), espectedResult);
//         assert.equal(rgbToHexColor(red, green, ' '), espectedResult);
//         assert.equal(rgbToHexColor(red, green, ''), espectedResult);
//         assert.equal(rgbToHexColor(red, green, null), espectedResult);
//         assert.equal(rgbToHexColor(red, green, NaN), espectedResult);
//         assert.equal(rgbToHexColor(red, green, undefined), espectedResult);
//         assert.equal(rgbToHexColor(red, green, -5), espectedResult);
//         assert.equal(rgbToHexColor(red, green, 300), espectedResult);

//     });
//     it('Value is valied', () => {
//         let red = 65;
//         let green = 3;
//         let blue = 5;
//         let espectedResult = '#410305';
//         assert.equal(rgbToHexColor(red, green, blue), espectedResult);


//     });
//     it('input 0 values', () => {
//         let red = 0;
//         let green = 0;
//         let blue = 0;
//         let espectedResult = '#000000';
//         assert.equal(rgbToHexColor(red, green, blue), espectedResult);


//     });
//     it('input 255 values', () => {
//         let red = 255;
//         let green = 255;
//         let blue = 255;
//         let espectedResult = '#FFFFFF';
//         assert.equal(rgbToHexColor(red, green, blue), espectedResult);


//     });


// });









// // Your tests will be supplied with a function named 'rgbToHexColor()', which takes three arguments. It should meet the following requirements:
// // •	Take three integer numbers, representing the red, green and blue values of an RGB color, each within range [0…255]
// // •	Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')
// // •	Return undefined if any of the input parameters are of invalid type or not in the expected range
