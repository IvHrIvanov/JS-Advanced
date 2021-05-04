function solve(n1,n2,symbol){
    let total;
if(symbol=='+'){
    total = n1+n2;
}else if(symbol=='-'){
    total= n1-n2;
}else if(symbol=='*'){
    total=n1*n2;
}else if(symbol=='/'){
    total=n1/n2;
}else if(symbol=='%'){
    total=n1%n2;
}else if(symbol=='**'){
    total=n1**n2;
}
console.log(total);
}

solve(3,5.5, '*');