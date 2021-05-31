function solve(array) {
    for (let index = 0; index < array.length; index++) {
        let current = array[index];
        if (current > array[index - 1]) {
            array[index+1].pop();
        }

    }
return array;

}
console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));