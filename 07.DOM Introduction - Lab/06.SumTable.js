function sumTable() {
    let costTdElements = Array.from(document.querySelectorAll('td:nth-child(2)'));
    let sumElements = costTdElements.pop();
    let sum = costTdElements.reduce((a, x) => a + Number(x.textContent), 0);
    sumElements.textContent = sum;
}