function revealWords(words, templates){
    let splitWords = words.split(', ')

    for (let word of splitWords){
        let splitTemplates = templates.split(' ');
        for (let current of splitTemplates){
            if (current.length === word.length && current.startsWith('*')){
                templates = templates.replace(current, word)
            }
        }
    }

    console.log(templates)
}