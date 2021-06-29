function solve() {
   let authorElement = document.getElementById('creator');
   let titleElement = document.getElementById('title');
   let categoryElement = document.getElementById('category');
   let contentyElement = document.getElementById('content');
   let buttonElement = document.querySelector('form>button');
   let mainElement = document.querySelector('main>section');
   let archiveElement = document.querySelector('.archive-section>ol');

   buttonElement.addEventListener('click', (e) => {
      e.preventDefault();
      let createArticle = document.createElement('article');
      let createDiv = document.createElement('div');
      createArticleFunc(createArticle, createDiv);
      createButtonsAndDiv(createDiv);


      authorElement.value = '';
      titleElement.value = '';
      categoryElement.value = '';
      contentyElement.value = '';

   })
   function createArticleFunc(createArticle, createDiv) {
      let createH1 = document.createElement('h1');
      let createPCategory = document.createElement('p');
      let createPCreator = document.createElement('p');
      let createPtext = document.createElement('p');
      let createStrong = document.createElement('strong');
      let createStrongTwo = document.createElement('strong');
      createPCategory.textContent = 'Category:';
      createPCreator.textContent = 'Creator:';
      createH1.textContent = titleElement.value;
      createStrong.textContent = categoryElement.value;
      createStrongTwo.textContent = authorElement.value;
      createPtext.textContent = contentyElement.value;
      mainElement.appendChild(createArticle);
      createArticle.appendChild(createH1);
      createArticle.appendChild(createPCategory);
      createPCategory.appendChild(createStrong);
      createArticle.appendChild(createPCreator)
      createPCreator.appendChild(createStrongTwo);
      createArticle.appendChild(createPtext);
      createArticle.appendChild(createDiv);
   }
   function createButtonsAndDiv(createDiv) {
      let createDelButton = document.createElement('button');
      let createArchiveButton = document.createElement('button');

      createDiv.classList = "buttons";
      createDelButton.classList = "btn delete";
      createArchiveButton.classList = "btn archive";
      createDelButton.textContent = 'Delete';
      createArchiveButton.textContent = 'Archive';
      createDiv.appendChild(createDelButton);
      createDiv.appendChild(createArchiveButton);
      createArchiveButton.addEventListener('click', (e) => archive(e));
      createDelButton.addEventListener('click', (e) => {
         e.target.parentNode.parentNode.remove();

      })
   }
   function archive(e) {
      
      let createLiELement = document.createElement('li');
      let arhive = e.target.parentNode.parentNode.querySelector('h1');
      archiveElement.appendChild(createLiELement);
      createLiELement.textContent = arhive.textContent;
      
      sort(archiveElement);
      e.target.parentNode.parentNode.remove();
     
      
   }
   function sort(ol) {
      console.log(ol);
      let a =  Array.from(ol.querySelector("li"));
      Array.from(ol.getElementsByTagName("li"))
         .sort((a, b) => a.textContent.localeCompare(b.textContent))
         .forEach(li => ol.appendChild(li));

   }

}

