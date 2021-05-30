function solve(input,n){

    for (let i = 0; i < n; i++) {
       let moveToFirstIndex = input.pop();
       input.unshift(moveToFirstIndex);
        
    }
console.log(input.join(' '));
}
solve(['1', '2', '3', '4'], 2); // 3 4 1 2
solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15); // Orange Coconut Apple Banana