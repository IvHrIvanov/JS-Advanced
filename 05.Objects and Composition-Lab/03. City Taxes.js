function cityTaxes(n, a, b) {
    const city = {
        name: n,
        population: a,
        treasury: b,
        taxRate: 10,
        collectTaxes: function () {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            this.population += Math.floor(percentage * this.population / 100);
        },
        applyRecession(percentage) {
            this.treasury -= Math.floor(this.treasury * percentage / 100);
        }
    }
    return city;
}
const city =
    cityTaxes('Tortuga',
        7000,
        15000);
console.log(city);

const cityTwo =
    cityTaxes('Tortuga',
        7000,
        15000);
cityTwo.collectTaxes();
console.log(cityTwo.treasury);
cityTwo.applyGrowth(5);
console.log(cityTwo.population);


