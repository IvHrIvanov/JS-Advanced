function create(words) {
   let idContent = document.getElementById('content');
   for (const iterator of words) {

      let div = document.createElement("div");
      let p = document.createElement("p");
      p.textContent = iterator;
      p.style.display = 'none';
      div.appendChild(p);
      div.addEventListener('click', showMarks)
      idContent.appendChild(div);

      function showMarks(e) {
      let a = e.target.children[0];
      a.style.display='block';
      }
   }
}