function pascalCaseSplitter(word){

    let result = []
    let startIndex = 0;

    for (let i = 1; i < word.length; i++){
        let char = word[i]

        if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
            result.push(word.substring(startIndex, i))
            startIndex = i
        }
    }

    result.push(word.substring(startIndex))
    console.log(result.join(', '))

}