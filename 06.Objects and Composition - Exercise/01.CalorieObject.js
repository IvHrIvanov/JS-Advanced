function solve(input) {
  
    let food = {};
    for (let i = 0; i < input.length; i+=2) {
        food[input[i]]=Number(input[i+1]);
    }
  return food;
}
console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));