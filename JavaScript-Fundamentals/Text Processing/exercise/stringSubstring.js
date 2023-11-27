function stringSubstring(word, text){
    let current = text.split(' ')

    for (let currentWord of current){
        if (currentWord.toLowerCase() === word.toLowerCase()){
            console.log(`${word}`)
            return;
        }
    }

    console.log(`${word} not found!`)
}