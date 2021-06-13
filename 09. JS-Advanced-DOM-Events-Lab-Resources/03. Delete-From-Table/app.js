function deleteByEmail() {
    let getAllTable = document.querySelectorAll('#customers tr > td:nth-child(2)');
    let inputTextGet = document.querySelector('label > input');
    let result = document.getElementById('result');
    let isFound = false;
    for (const iterator of getAllTable) {
        if (iterator.textContent === inputTextGet.value) {
            iterator.parentNode.remove();
            result.textContent = 'Deleted';
            isFound=true;
        }
    }
    if(isFound==false)
    {
        result.textContent='Not found.';
    }

inputTextGet.value = '';

}