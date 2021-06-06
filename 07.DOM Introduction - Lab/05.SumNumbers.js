function calc() {
    //1.Select
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    let sum = document.getElementById('sum');
    //2.Parse
    let firstNumber = Number(num1.value);
    let secondNUmber = Number(num2.value);
    //3.Sum
    sum.value = Number(firstNumber + secondNUmber);
}
