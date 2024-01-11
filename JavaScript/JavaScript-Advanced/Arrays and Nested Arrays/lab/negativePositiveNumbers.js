function negativeAndPositiveNumbers(input){

    let result = []

    for (let current of input){
        if (current < 0){
            result.unshift(current)
        } else {
            result.push(current)
        }
    }

    for (let current of result){
        console.log(current)
    }
}