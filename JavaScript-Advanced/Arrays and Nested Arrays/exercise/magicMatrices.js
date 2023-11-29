function magicMatrices(arr){

    let totalSumRow = arr[0].reduce((acc, curr) => acc + curr)
    
    for (let row = 0; row < arr.length; row++){
        let sumRow = 0;
        let sumColumn = 0;

        for (let col = 0; col < arr.length; col++) {
            sumRow += arr[col][row]
            sumColumn += arr[row][col]
            
        }

        if (totalSumRow !== sumRow || totalSumRow !== sumColumn){
            return false
        }
    }

    return true
    
}