function replaceRepeatingChars(input){
    let result = []

    for (let index = 0; index < input.length; index++){
        if (input[index] !== input[index+1]){
            result.push(input[index])
        }
    }

    console.log(result.join(''))
}