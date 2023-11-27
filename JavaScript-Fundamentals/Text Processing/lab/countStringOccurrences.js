function countStringOccurences(text, word){

    let split = text.split(' ')
    let counterWords = 0;

    for (let current of split){
        if (current === word){
            counterWords++
        }
    }

    console.log(counterWords)
}