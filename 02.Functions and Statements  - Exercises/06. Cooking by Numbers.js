function solve(input,input1,input2,input3,input4,input5) {
    let number = input;
    let array = [input1,input2,input3,input4,input5];
    for (let index = 0; index < array.length; index++) {
        let choice = array[index];
        if (choice == 'chop') {
            number /= 2;
        } else if (choice == 'dice') {
            number = Math.sqrt(number);
        } else if (choice == 'spice') {
            number += 1;
        } else if (choice == 'bake') {
            number *= 3;
        } else if (choice == 'fillet') {
            number *= 0.8;
             console.log(number.toFixed(1));
             continue;
          
        }
        console.log(number);
    }

}
solve('100', 'fillet', 'chop', 'chop', 'chop', 'chop');