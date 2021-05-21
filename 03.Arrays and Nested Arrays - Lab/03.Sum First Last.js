function solve(numbers) {
    let sum = 0;
    
        sum += parseInt(numbers[0]) + parseInt(numbers[numbers.length-1]);

    

    return sum;
}

console.log(solve(['20', '30', '40']));
console.log(solve(['5', '10']));