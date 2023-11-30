function calc() {
    let firstNumber = document.getElementById('num1').value
    let secondNumber = document.getElementById('num2').value


    function calculate(){
        return document.getElementById('sum').value = Number(firstNumber) + Number(secondNumber)
    }
    calculate()
}