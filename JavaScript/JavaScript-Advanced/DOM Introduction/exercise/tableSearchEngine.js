function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);
 
 
    function onClick() {
       let inputSearch = document.getElementById('searchField').value.toLowerCase()
 
       let tableContents = document.querySelectorAll('tbody tr')
 
 
       for (let current of tableContents){
          let textToLowerCase = current.textContent.toLowerCase()
          if (textToLowerCase.includes(inputSearch)){
             current.setAttribute('class', 'select')
          } else {
             current.removeAttribute('class')
          }
       }
    }
 }