function elements(elements){
let sum =0;
let inverse =0;
let concat = '';
for(var i=0;i<elements.length;i++){
  sum +=elements[i];
  inverse += 1/elements[i];
  concat += `${elements[i]}`;
 }
 console.log(sum);
 console.log(inverse);
 console.log(concat);
}
elements([1, 2, 3]);