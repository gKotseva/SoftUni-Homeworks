function pieceOfPie(arr, start, end){

    let startArr = arr.indexOf(start)
    let endArr = arr.indexOf(end)

    let result = arr.slice(startArr, endArr+1)

    return result;

}