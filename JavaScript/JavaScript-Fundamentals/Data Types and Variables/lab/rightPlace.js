function rightPlace(word, char, correct){

    let replace = word.replace('_',char)

    if (replace === correct){
        console.log(`Matched`)
    } else {
        console.log(`Not Matched`)
    }

}