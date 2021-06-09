function subtract() {
    //1. Select by Id
    let numberOne = document.getElementById('firstNumber');
    let numberTwo = document.getElementById('secondNumber');
    //2.Parse Numbers
    let numOne = numberOne.value;
    let numTwo = numberTwo.value;
    //3.Basic logic for the task
    let result = numOne-numTwo;
    //4. Display
    let resultDiv = document.getElementById('result');
    resultDiv.textContent=result;

}