function solve(input) {
    let newCar =
    {
        model: input.model,
    };
    let engine = {};
    let carriage = {};
    if (input.power <= 90) {
        engine['power'] = 90;
        engine['volume'] = 1800;
        newCar['engine'] = engine;

    } else if (input.power > 90 && input.power <= 120) {
        engine['power'] = 120;
        engine['volume'] = 2400;
        newCar['engine'] = engine;
    }
    else if (input.power >= 200) {
        engine['power'] = 200;
        engine['volume'] = 3500;
        newCar['engine'] = engine;
    }
    if (input.carriage == 'hatchback') {
        carriage['type'] = 'hatchback';
        carriage['color'] = input.color;
        newCar['carriage'] = carriage;
    } else if (input.carriage == 'coupe') {
        carriage['type'] = 'coupe';
        carriage['color'] = input.color;
        newCar['carriage'] = carriage;
    }
    let wheels = [];
    let wheelNewSize = 0;
    if (input.wheelsize % 2 == 0) {
        wheelNewSize = input.wheelsize - 1;
    } else {
        wheelNewSize = input.wheelsize;
    }
    for (let i = 0; i < 4; i++) {

        wheels[wheels.length] = wheelNewSize;
    }
    newCar['wheels'] = wheels;
    return newCar;
}

let car =
{
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
};
console.log(solve(car));

let input = {
    model: 'Ferrari',
    power: 200,
    color: 'red',
    carriage: 'coupe',
    wheelsize: 21
};

console.log(solve(input));