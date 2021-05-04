function solve(n,m){
    let total=0;
    var i;
    let nParse = parseFloat(n);
    let mParse = parseFloat(m);
    for( i=nParse;i<=mParse;i++)
    {
        total+=i;
    }
    
    console.log(total);
}
solve('1', '5' );