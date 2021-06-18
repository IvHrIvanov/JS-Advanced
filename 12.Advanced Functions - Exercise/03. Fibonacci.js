function getFibonator() {
    let prev = 0;
    let cur = 1;
    let counter =0;
    return function () {
        if (counter == 0) {
            counter++;
            return counter;
        }
        let next = prev + cur;
        prev = cur;
        cur = next;
        return cur;

    }

}




let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
