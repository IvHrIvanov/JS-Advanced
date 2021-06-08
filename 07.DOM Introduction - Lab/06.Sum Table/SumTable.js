function sumTable() {
    let costTdElements = Array.from(document.querySelectorAll('td:nth-child(2)'));
    let sumElements = costTdElements.pop();
    let out = 0;
    //let sum = costTdElements.reduce((a, x) => a + Number(x.textContent), 0);
    for (let i = 0; i < costTdElements.length; i++) {
        out += Number(costTdElements[i].textContent);
    }
    sumElements.textContent = out;
}