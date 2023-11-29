function biggerHalf(input){

    let sort = input.sort((a,b) => a-b)
    let arrLength = sort.length

    let secondHalf = arrLength / 2

    if (arrLength % 2 !== 0){
        secondHalf -= 0.5
    }

    let result = []

    for (let i = secondHalf; i < sort.length; i++){
        result.push(sort[i])
    }

    return result;

}