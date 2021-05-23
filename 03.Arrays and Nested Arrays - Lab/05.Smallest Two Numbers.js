function solve(input) {
    let output = [];
    output = input.sort((a, b) => a - b).slice(0, 2);
    console.log(output.join(' '));
}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);