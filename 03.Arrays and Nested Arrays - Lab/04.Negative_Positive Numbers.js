function solve(input) {

    let numbers = [];

    for (let index = 0; index < input.length; index++) {

        let current = input[index];
        if (current >= 0) {
            numbers[numbers.length] = current;
        } else {
            let newArray = [];
            newArray[0] = current;
            let i = 1;
            for (let a = 0; a < numbers.length; a++) {

                newArray[i] = numbers[a];
                i++;
            }
            numbers = newArray;
        }

    }


    console.log(numbers.join("\n"));

}
solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);