function solve(string, casing) {
    string = document.getElementById('text').value
    casing = document.getElementById('naming-convention').value
    let final = document.getElementById('result')
  
    if (casing === "Camel Case"){
      let lowerCase = string.toLowerCase()
      let splitString = lowerCase.split(' ')
      let result = []
  
      for (let i = 0; i < splitString.length; i++){
        if (i === 0){
          result.push(splitString[i])
        } else {
          let replace = splitString[i].replace(splitString[i][0], splitString[i][0].toUpperCase())
          result.push(replace)
        }
      }
  
      final.innerHTML += result.join('')
  
    } else if (casing === "Pascal Case"){
      let lowerCase = string.toLowerCase()
      let splitString = lowerCase.split(' ')
      let result = []
  
      for (let current of splitString){
        let replace = current.replace(current[0], current[0].toUpperCase())
        result.push(replace)
      }
      
      final.innerHTML += result.join('')
  
    } else (
      final.innerHTML += `Error!`
    )
  
  }