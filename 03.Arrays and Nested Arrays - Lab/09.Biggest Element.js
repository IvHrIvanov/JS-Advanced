function biggestElement(array) {
    let biggestNumber = Number.MIN_SAFE_INTEGER;
    let current = 0;
    

    for (let row = 0; row < array.length; row++) {
      
        for (let col = 0; col < array[row].length; col++) {
           
            current = array[row][col];
            if (current > biggestNumber) {
                biggestNumber = current;
            } 
        }
        

    }
    return biggestNumber;
}


console.log(biggestElement([[0, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]));
console.log(biggestElement([[20, 45, 10], [8, 33],[20, 80, 4,100,200]]));
console.log(biggestElement([[-199, -599, -10000], [-1, -4000],[-60, -80, -4,-100,-200]]));