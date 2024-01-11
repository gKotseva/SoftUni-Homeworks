function hardWords(array){

    let text = array[0].toString().split(' ')
    let words = array[1]

    let resultText = String(text.join(' '))

    for (let current of text){
        if (current.startsWith('_')){
            for (let match of words){
                let currentWord = current.replace(',', '').replace('.', '')
                if (match.length === currentWord.length){
                    resultText = resultText.replace(currentWord, match)
                    let index = words.indexOf(match)
                    words.splice(index, 1)
                    break;
                }
            }
        }
    }

    console.log(resultText)
}