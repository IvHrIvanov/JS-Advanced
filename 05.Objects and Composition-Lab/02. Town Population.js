function solve(input) {
    const city = {};
    input.forEach(x => {
        let [name, population] = x.split(' <-> ');
        population = Number(population);
        if (city[name] != undefined) {
            population += city[name];
        }
        
        city[name] = population;
    });

    for (const town in city) {
        console.log(`${town} : ${city[town]}`)
    }
}

solve(
    [
        'Sofia <-> 1200000',
        'Sofia <-> 1200000',
        'Montana <-> 20000',
        'New York <-> 10000000',
        'Washington <-> 2345000',
        'Las Vegas <-> 1000000'
    ]
);