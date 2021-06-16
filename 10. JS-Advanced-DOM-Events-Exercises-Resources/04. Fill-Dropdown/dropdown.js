function addItem() {
    let textElement = document.getElementById('newItemText');
    let valueElement = document.getElementById('newItemValue');
    let buttonElement = document.querySelectorAll('input')[2];
    let menuElement = document.getElementById('menu');

    buttonElement.addEventListener('click', solve());

    function solve() {
        let option = document.createElement('option');
        option.value = valueElement.value;
        option.textContent = textElement.value;
        menuElement.appendChild(option);
    }
    valueElement.value='';
    textElement.value='';
}