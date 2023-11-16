function echoType(word){
    
    if (word === String(word) || word === Number(word)){
        console.log(typeof word)
        console.log(word)
    } else {
        console.log(typeof word)
        console.log(`Parameter is not suitable for printing`)
    }
}