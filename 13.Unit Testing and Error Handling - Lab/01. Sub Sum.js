function solve(input, startIndex, endIndex) {
    let sum = 0;
    if (startIndex < 0) {
        startIndex = 0;
    }
    if (endIndex > input.length) {
        endIndex = input.length;
    }
    for (let i = startIndex; i < endIndex; i++) {
        let current = input[i];
        if (isNaN(current)) {
            return NaN;
        } else {
            sum += current;
        }

    }
    return sum;
}

console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(solve([10, 'twenty', 30, 40], 0, 2));
console.log(solve([], 1, 2));
console.log(solve('text', 0, 2));
