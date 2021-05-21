function solve(n, k) {
    let numbers = [1];

    for (let index = 1; index < n; index++) {

        let addNumber = 0;
        if (numbers.length < k) {
            for (let i = 0; i < numbers.length; i++) {

                addNumber += numbers[i];
            }
        } else {

            for (let a = numbers.length - 1; a > numbers.length - 1 - k; a--) {
                addNumber += numbers[a];
            }
        }
        numbers[numbers.length] = addNumber;
    }
    return numbers;
}

console.log(solve(6, 3));
console.log(solve(8, 2));