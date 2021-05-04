function solve(numbers) {
    const convertNumbers = numbers.toString();
    let isSame = true;
    let sum = 0;
    for (let i = 0; i < convertNumbers.length; i++) {

        if (convertNumbers[i] !== convertNumbers[i + 1] && convertNumbers[i + 1] !== undefined) {
            isSame = false;
        }
        sum += Number(convertNumbers[i]);

    }

    return `${isSame}\n${sum}`;
}
console.log(solve(1234));