function wordCalculation(word1,word2,word3){
    let sum = word1.length+word2.length+word3.length;
   
    console.log(sum);
    console.log(Math.floor(sum/3));
 
}
wordCalculation('chocolate', 'ice cream', 'cake');