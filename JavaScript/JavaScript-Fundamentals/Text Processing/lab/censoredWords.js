function censoredWords(input, word){
    input = input.replace(word, '*'.repeat(word.length))

    while(input.includes(word)){
        input = input.replace(word, '*'.repeat(word.length))
    }

    console.log(input)

}