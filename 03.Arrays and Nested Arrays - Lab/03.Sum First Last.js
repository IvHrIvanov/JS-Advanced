function solve(numbers) {
    let sum = Number(numbers.pop());
    sum += Number(numbers.shift());

    return sum;
}

console.log(solve(['20', '30', '40']));
console.log(solve(['5', '10']));