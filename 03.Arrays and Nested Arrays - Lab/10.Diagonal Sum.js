// First way with For loops
function diagonalSum(array) {

    let firstDiagonal = 0;

    let secondDianogal = 0;

    for (let row = 0; row < array.length; row++) {
        for (let col = row; col <= row; col++) {

            firstDiagonal += array[row][col];
        }

    }

    for (let row = 0; row < array.length; row++) {
        for (let col = array.length - 1 - row; col >= array.length - 1 - row; col--) {

            secondDianogal += array[row][col];
        }

    }
    console.log(firstDiagonal, secondDianogal);

}
diagonalSum([[20, 40], [10, 60]]);
diagonalSum([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);

// Second Way With Foreach

function digaonalSUmFOreach(arr) {
    let sum = 0;
    let firstDiagonal =0;
    let secondDiagonal =0;
    let firstIndex=0;
    let secondIndex = arr.length-1;
    arr.forEach(array=>{
        firstDiagonal += array[firstIndex++];
        secondDiagonal +=array[secondIndex--];
    })
console.log(firstDiagonal,secondDiagonal);
}
digaonalSUmFOreach([[20, 40], [10, 60]]);
digaonalSUmFOreach([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);