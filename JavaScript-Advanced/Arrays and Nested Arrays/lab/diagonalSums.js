function diagonalSums(input){

    let innerArr = input[0]

    let sumFirst = 0;
    let sumSecond = 0;

    let secondDiagonalIndex = innerArr.length - 1

    for (let i = 0; i < input.length; i++){
        let firstDiagonal = input[i][i]
        let secondDiagonal = input[i][secondDiagonalIndex--]
        sumFirst += firstDiagonal
        sumSecond += secondDiagonal
    }

    let result = []

    result.push(sumFirst, sumSecond)

    console.log(result.join(' '))

}