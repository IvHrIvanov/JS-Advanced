function solve(input) {
    let array = [];
    for (let i = 0; i < input.length; i++) {
        let current = input[i];
        if (current === "add") {
            array.push(i + 1);
        } else if (current === "remove") {
            array.pop();
        }


    }
    if (array.length!=0) {
        console.log(array.join('\n'));
        
    }else{
        console.log("Empty");
    }
  
}
solve(['add', 'add', 'add', 'add']); // 1,2,3,4
solve(['add', 'add', 'remove', 'add', 'add']); // 1,4,5
solve(['remove', 'remove', 'remove']); // 1,4,5