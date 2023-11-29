function squareOfStars(number){
    let result = '';

    for (let i = 0; i < number; i++){
        for (let j = 0; j < number; j++){
            result += '* '
        }
        result += '\n'
    }
    console.log(result)

}