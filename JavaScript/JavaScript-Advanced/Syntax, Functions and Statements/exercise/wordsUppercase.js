function wordsUpperCase(input){

    let regex = /[A-z0-9]+/g;

    let result = []

    for (let current of input.match(regex)){
        result.push(current.toUpperCase())
    }

    console.log(result.join(', '))
}