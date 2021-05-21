function solve(input) {
    let numbers = '';
    for (let index = 0; index < input.length; index += 2) {
        numbers += input[index] + ' ';

    }
    return numbers;
}

console.log(solve(['20', '30', '40', '50', '60']));

console.log(solve(['5', '10']));