function search() {
    let items = document.querySelectorAll('#towns li')
    let inputValue = document.getElementById('searchText').value
    let result = document.getElementById('result')
 
    let sum = 0
    let inputToLowerCase = inputValue.toLowerCase()
 
    for (let li of items){
       let liTextToLowerCase = li.textContent.toLowerCase()
       
       if (liTextToLowerCase.includes(inputToLowerCase)){
          li.style.fontWeight = 'bold'
          li.style.textDecoration = 'underline'
          sum++
       } else {
          li.style.fontWeight = ''
          li.style.textDecoration = ''
       }
    }
 
    result.textContent = `${sum} matches found`
 }