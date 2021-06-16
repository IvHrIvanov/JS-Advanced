function encodeAndDecodeMessages() {
    let getElementTextArea = document.querySelectorAll('main div textarea');
    let buttons = document.querySelectorAll('main div button');
    let returnEncoding = getElementTextArea[0];
    let returnDecoding = getElementTextArea[1];
    let encoding = getElementTextArea[0];
    let encButton = buttons[0];
    let decButton = buttons[1];
    let decoding = getElementTextArea[1];


    let newEncodning = '';
    let newDecodning = '';
    encButton.addEventListener('click', function () {
        for (const key of encoding.value) {
            let convert = key.charCodeAt(0) + 1;
            newEncodning += (String.fromCharCode(convert));

        }
        decoding.value = newEncodning;    
        encoding.value = returnEncoding.textContent;
        newEncodning='';
    });
    decButton.addEventListener('click', function () {
        for (const key of decoding.value) {
            let convert = key.charCodeAt(0) - 1;
            newDecodning += (String.fromCharCode(convert));

        }
        decoding.value = newDecodning;
        newDecodning='';
    });
   
}