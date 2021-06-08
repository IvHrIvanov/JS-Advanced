function extractText() {
    let items = document.querySelectorAll('#items li');
    let result = document.getElementById('result');
    let output = '';
    for (const iterator of items) {
        output += iterator.textContent.trim() + '\n';
    }
    result.textContent=output;
}