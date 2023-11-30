function solve() {
    let inputText = document.getElementById('input').value
    let outputText = document.getElementById('output')
    
    let splitText = inputText
    .split('.')
    .filter((s) => s !== "")
    .map((s) => s+'.')
  
    let paragraphTop = Math.ceil(splitText.length / 3)
  
    for (let i = 0; i < paragraphTop; i++){
      let joinedSentances = splitText.splice(0, 3).join("")
      console.log(joinedSentances)
      outputText.innerHTML += `<p>${joinedSentances}</p>`
  
    }
  
  }