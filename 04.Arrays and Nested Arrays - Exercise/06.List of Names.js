function solve(array) {
    array.sort(function (a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a == b) return 0;
        if (a > b) return 1;
        return -1;
    });
    for (const iterator of array) {
        console.log(`${array.indexOf(iterator) + 1}.${iterator}`);
    }

}
solve(["John", "Bob", "aa", "Christina", "Ema", "Ivan", "Dragan", "Zzz"]);