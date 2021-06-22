function createCalculator() {
    let value = 0;
    let obj = {
        add: function (num) { value += Number(num); },
        subtract: function (num) { value -= Number(num); },
        get: function () { return value; }
    };
    console.log(obj);
    return {
        add: function (num) { value += Number(num); },
        subtract: function (num) { value -= Number(num); },
        get: function () { return value; }
    }

}
console.log(createCalculator());
module.exports = createCalculator;