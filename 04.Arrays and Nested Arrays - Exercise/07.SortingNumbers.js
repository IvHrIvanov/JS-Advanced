function sortNumbers(array) {
    let output = [];
    array.sort((a, b) => a - b);
    let current = 0;
    let loops = array.length;
    for (let i = 0; i < loops; i++) {

        if (i % 2 == 0) {
            current = array.shift();
            output.push(current);
            array.reverse();
        } else {
            current = array.shift();
            output.push(current);
            array.reverse();
        }

    }
    return output;
}
console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
// [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]



