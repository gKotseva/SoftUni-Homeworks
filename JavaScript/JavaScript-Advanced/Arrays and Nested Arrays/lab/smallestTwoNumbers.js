function smallestTwoNumbers(input){

    let sort = input.sort((a, b) => a-b)

    let result = []

    for (let i = 0; i < 2; i++){
        result.push(sort[i])
    }

    console.log(result.join(' '))
}