function getFibonator(){
    let firstNum = 0
    let secondNum = 1
    return function () {
        let sum = firstNum + secondNum
        firstNum = secondNum
        secondNum = sum
        return firstNum
    }

}