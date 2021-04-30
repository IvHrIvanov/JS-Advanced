function solve(n){
    let typeofN = typeof(n);
   if(typeofN=='number')
   {
 let cicrle= Math.pow(n,2) * Math.PI;
 console.log(cicrle.toFixed(2));
   }
   else{
       console.log(`We can not calculate the circle area, because we receive a ${typeofN}.`)
   }
}
solve('name');