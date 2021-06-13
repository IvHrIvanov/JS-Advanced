function addItem() {
    let pickUpItems = document.getElementById('items');
    let inputText = document.getElementById('newItemText');

    let deleteButton = document.createElement('a');
    deleteButton.setAttribute('href', '#');
    deleteButton.textContent = '[Delete]';

    let newItem = document.createElement('li');
    newItem.textContent = inputText.value;
    newItem.appendChild(deleteButton);
    pickUpItems.appendChild(newItem);
    inputText.value = ' ';

    deleteButton.addEventListener('click', (e) => {
        e.currentTarget.parentNode.remove();

    });

}