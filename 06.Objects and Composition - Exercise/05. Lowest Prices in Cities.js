function solve(input) {

    let town = [{ townName: '', productName: '', productPrice: null }];
    for (let i = 0; i < input.length; i++) {
        let [townName, productName, productPrice] = input[i].split(' | ');
        productPrice = Number(productPrice);
        if (town.find(x => x.townName === townName && x.productName === productName)) {
            town.find(x => x.townName === townName && x.productName === productName).productPrice = productPrice;

        } else {
            town.push({ townName, productName, productPrice });

        }
    }

    for (let i = 1; i < town.length; i++) {
        if (town[i].productName === town[i + 1].productName && town[i].productPrice == town[i + 1].productPrice) {
            console.log(`${town[i].productName} -> ${town[i].productPrice} (${town[i].townName})`);
        } else {
            console.log(`${town[i].productName} -> ${town[i].productPrice} (${town[i].townName})`);

        }

    }
}

solve(
    [
        'Sample Town | Sample Product | 1000',
        'Sample Town | Orange | 2',
        'Sample Town | Peach | 1',
        'Sofia | Orange | 3',
        'Sofia | Peach | 2',
        'New York | Sample Product | 1000.1',
        'New York | Burger | 10'
    ]
);