function search() {
   let towns = Array.from(document.querySelectorAll('#towns li'));
   let type = document.getElementById('searchText');
   let find = towns.filter(x => x.textContent.includes(type.value))
      .map(x => {
         x.style.fontWeight = 'bold';
         x.style.textDecoration = 'underline'
      });


   let result = document.getElementById('result');
   result.textContent = find.length + ' ' + 'matches found';
}
