function addItem() {
    let pickUpItems = document.getElementById('items');
    let inputText = document.getElementById('newItemText')

    
    let newItem = document.createElement('li');
    newItem.textContent = inputText.value;
    pickUpItems.appendChild(newItem);
    inputText.value = ' ';
}