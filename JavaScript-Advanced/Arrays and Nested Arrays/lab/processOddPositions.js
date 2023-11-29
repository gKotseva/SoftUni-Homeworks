function processOddPositions(input){

    let result = []

    for (let i = 1; i < input.length; i+=2){
        result.push(input[i] + input[i])
    }

    let reverse = result.reverse()

    return reverse.join(' ')
}