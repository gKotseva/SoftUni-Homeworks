function extractIncreasingSubset(input){
    let maxNumber = Number.MIN_SAFE_INTEGER

    let result = input.reduce((acc, curr) => {
        if (curr >= maxNumber){
            maxNumber = curr
            let temporaryArray = acc
            temporaryArray.push(curr)
            return temporaryArray
        }
        return acc;
    }, [])
    return result;
   
}