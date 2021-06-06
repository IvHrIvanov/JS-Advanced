function toggle() {
    let getElement = document.getElementsByClassName('head');
    let button = document.getElementsByClassName('button')[0];
    let textDiv = document.getElementById('extra');
   if(button.textContent == 'More'){
       button.textContent= 'Less';
       textDiv.style.display='block';
   } else if(button.textContent =='Less'){
       button.textContent='More';
       textDiv.style.display='none';
   }
   
   
    button.textContent = button.textContent === 'More' ? 'Less' : 'More';
  //  textDiv.style.display = textDiv.style.display === 'none' ? 'block' : 'none';
}