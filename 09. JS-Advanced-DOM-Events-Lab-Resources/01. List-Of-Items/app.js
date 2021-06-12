function addItem() {
    let selectIdUlLi = document.querySelector('#items');
    let inputElement = document.getElementById('newItemText');

    let newLiElement = document.createElement('li');
    newLiElement.textContent = inputElement.value;
    selectIdUlLi.appendChild(newLiElement)


    inputElement.value = ' ';
}