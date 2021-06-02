function solve(array){
let output = [];
array.sort();
output = array.sort((a,b)=>a.length-b.length);

console.log(output.join("\n"));
}
solve(['alpha', 'beta', 'gamma']);
solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
solve(['test', 'Deny', 'omen', 'Default']);