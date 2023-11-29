function sortingNumbers(arr){
    let result = []
    let sorted = arr.sort((a, b) => a - b)

    while (sorted.length !== 0){
        let firstEl = sorted.shift()
        let lastEl = sorted.pop()

        result.push(firstEl)
        result.push(lastEl)
    }

    return result

}