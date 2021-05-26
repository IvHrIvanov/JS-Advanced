function solve(input) {
    let numbers = [];
    for (let num of input) {
        if(num<0){
            numbers.unshift(num);
        } else{
            numbers.push(num);
        }
    }
    console.log(numbers.join("\n"));
}
solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);