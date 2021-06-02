function solve(array) {
    let sum = [];
    for (let i = 0; i < array.length; i++) {
        sum[sum.length] = array[i].reduce((x, i) => x + i);
    }
    
    for (let row = 0; row < array.length; row++) {
        sum[sum.length] = array[row,0].reduce((x,i)=>x+i);
        
    }
    let checkBool = sum.every(x=> x==sum[0]);

    // let checkBool = sum.reduce((x,i,a)=>i===sum[0]);
    console.log(checkBool);
}

// solve(
//     [
//         [11, 32, 45],
//         [21, 0, 1],
//         [21, 1, 1]
//     ]
// );
solve(
    [
        [4, 5, 6],
        [6, 5, 4],
        [5, 5, 5]

    ]
);
solve(
    [
        [1, 0, 0],
        [0, 0, 1],
        [0, 1, 0]

    ]
);