function create(words) {
    for (let current of words){
       let div = document.createElement('div')
       let p = document.createElement('p')
       let resultDiv = document.getElementById('content')
       p.textContent = current
       p.style.display = 'none'
       resultDiv.appendChild(div)
       div.appendChild(p)
       div.addEventListener('click', function () {
          p.style.display = 'block'
       })
    }
 }