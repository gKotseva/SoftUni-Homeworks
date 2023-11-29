function equalNeighbors(matrix){

    let pairCount = 0;

    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            if (i - 1 >= 0 && matrix[i - 1][j] === matrix[i][j]){
                pairCount++
            }

            if (j - 1 >= 0 && matrix[i][j - 1] === matrix[i][j]){
                pairCount++
            }
        }
    }

    return pairCount;

}