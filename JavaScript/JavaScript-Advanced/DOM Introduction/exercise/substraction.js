function subtract(firstNum, secondNum) {

    firstNum = document.getElementById('firstNumber').value
    secondNum = document.getElementById('secondNumber').value

    firstNum = Number(firstNum)
    secondNum = Number(secondNum)

    let result = firstNum - secondNum

    let final = document.getElementById('result')

    final.innerHTML += result
}