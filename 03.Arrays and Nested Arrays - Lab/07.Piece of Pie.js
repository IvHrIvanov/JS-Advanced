function solve(pieArr, firstPie, secondPie) {

    let outputPie = [];
    let firstIndex = pieArr.findIndex(x=>x==firstPie);
    let secondIndex = pieArr.findIndex(x=>x==secondPie);
    outputPie = pieArr.slice(firstIndex, secondIndex+1);

    console.log(outputPie);

}

solve(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
);