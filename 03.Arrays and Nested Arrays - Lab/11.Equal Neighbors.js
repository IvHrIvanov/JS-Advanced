function solve(input) {

    let secondRow = 1;
    let count = 0;

    for (let row = 0; row < input.length-1; row++) {
        let colIndex =0;
        for (let col = 0; col <= input[colIndex].length; col++) {
            let currentOne = input[row][col];
            if (col + 1 > input[colIndex].length) {
                break;
            }
            let currentTwo = input[row + 1][col];
            if (currentOne === currentTwo) {
                count++;
            }
        }
        colIndex++;

    }
    for (let row = 0; row < input.length; row++) {
        let colIndex =0;
        for (let col = 0; col <= input.length; col++) {

            let currentOne = input[row][col];
            if (col + 1 >= input[colIndex].length) {
                break;
            }
            let currentTwo = input[row][col + 1];
            if (currentOne === currentTwo) {
                count++;
            }
        }
        colIndex++;
    }
    return count;
}

console.log(solve([


    ['2', '2', '5', '7', '4']
    , ['4', '0', '5', '3', '4']
    , ['2', '5', '5', '4', '2']]));
console.log(
    solve(
        [
            ['2', '3', '4', '7', '0'],
            ['4', '0', '5', '3', '4'],
            ['2', '3', '5', '4', '2'],
            ['9', '8', '7', '5', '4']
        ]
    ));
console.log(
    solve(
        [
            ['test', 'yes', 'yo', 'ho'],
            ['well', 'done', 'yo', '6'],
            ['not', 'done', 'yet', '5']
        ]

    ));