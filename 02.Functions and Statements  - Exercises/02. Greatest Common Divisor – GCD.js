function solve(n1, n2) {

    

    while (n2 != 0) {
        let t = n2;
        n2 = n1 % n2;
        n1 = t;

    }
    console.log(n1);
}
solve(2154, 458);