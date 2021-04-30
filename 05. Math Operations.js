function solve(n1,n2,symbol){
    let sum;
if(symbol=='+'){
sum = n1+n2;
}else if(symbol=='-'){
    sum= n1-n2;
}else if(symbol=='*'){
    sum=n1*n2;
}else if(symbol=='/'){
    sum=n1/n2;
}else if(symbol=='%'){
    sum=n1%n2;
}else if(symbol=='**'){
    sum=n1**n2;
}
console.log(sum);
}

solve(3,5.5, '*');