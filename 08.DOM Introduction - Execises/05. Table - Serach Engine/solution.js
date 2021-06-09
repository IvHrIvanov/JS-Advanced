function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let search = document.getElementById('searchField').value;
      let trElements = Array.from(document.querySelectorAll('tr'));
      let a = trElements.shift();
      a = trElements.shift();
      
      trElements.forEach(td => {
       let current = td.textContent;
       
         if (td.textContent.includes(search) && search!='') {
            td.classList.add('select');
            console.log(current);
         }
      });
   }
}