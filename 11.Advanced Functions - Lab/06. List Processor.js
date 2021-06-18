function solve(input) {
    let result = solverTwo();
    for (let i = 0; i < input.length; i++) {
        let [command, word] = input[i].split(' ');
        result[command](word);
    }
    function solverTwo() {
       let arr = [];
        return {
            add: (x) => {
                arr.push(x);
            },
            remove: (x) => {
                arr = arr.filter(a => a != x);
            },
            print: () => {
                console.log(arr.join(','));
            }
    
        }
    }
}



solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);

