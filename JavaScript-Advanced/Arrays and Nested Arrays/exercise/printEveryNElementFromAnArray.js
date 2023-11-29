function printEveryNthElement(array, number){

    let result = []

    for (let i = 0; i < array.length; i += number){
        result.push(array[i])
    }

    return result;
}