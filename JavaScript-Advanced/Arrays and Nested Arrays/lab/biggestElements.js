function biggestElement(input){

    let biggest = Number.MIN_SAFE_INTEGER

    for (let i = 0; i < input.length; i++){
        for (let j = 0; j <= input[i].length; j++){
            if (input[i][j] > biggest){
                biggest = input[i][j]
            }
        }
    }

    return biggest;
}