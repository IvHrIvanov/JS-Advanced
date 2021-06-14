function solve() {
   let button = document.querySelectorAll('div>button');
   let textArea = document.querySelector('textarea');
   let sum = 0;
   let arr = [];
   for (let i = 0; i < button.length; i++) {
      button[i].addEventListener('click', (e) => {
         if (e.target.textContent != 'Checkout') {
            let name = e.currentTarget.parentNode.parentNode.querySelector('div.product-title').textContent;
            if (!arr.some(x => x == name)) {
               arr.push(name);
            }
            let current = Number(e.currentTarget.parentNode.parentNode.querySelector('div.product-line-price').textContent);
            sum += current;
            console.log(sum);
            textArea.textContent += `Added ${name} for ${current.toFixed(2)} to the cart.\n`
         } else {
            textArea.textContent += `You bought ${arr.join(', ')} for ${sum.toFixed(2)}.`;
            for (const iterator of button) {
               iterator.disabled = true;
            }
         }

      })
   }

}