function sortArray(arr, command){
    return command === 'asc' ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a)
}