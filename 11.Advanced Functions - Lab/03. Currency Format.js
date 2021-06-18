function currencyFormatter(separator, symbol, symbolFirst, x) {
    let result = Math.trunc(x) + separator;
    result += x.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}



function createFormatter(separator,
    symbol,
    symbolFirst,
    a) {
    return (x) => a(separator,
        symbol,
        symbolFirst,
        x);
}
let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);
console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));  // $ 2,71
