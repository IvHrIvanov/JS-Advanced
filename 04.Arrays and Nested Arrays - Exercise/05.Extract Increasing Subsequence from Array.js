function solve(array) {
    let output = [];
    // 1. First Way with For loop
    let biggest = 0;
    // for (let index = 0; index < array.length; index++) {
    //     let current = array[index];

    //     if (current > biggest) {
    //         output.push(current);
    //         biggest = array[index];
    //     }


    // }
    // 2. Second Way with Method
    //output = array.filter((x, i) => array[i - 1] < x || array[i - 1] === undefined);
    array.filter((x, i) => {
        if (x > biggest) {
            output.push(x);
            biggest = x;
        }
    });
    return output;
    //return array;
}
console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24])); // [1, 3, 8, 10, 12, 24]
console.log(solve([1, 2, 3, 4])); //  [1, 2, 3, 4]
console.log(solve([20, 3, 2, 15, 6, 1])); //  [20]