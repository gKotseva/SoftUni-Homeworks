function calculator() {
    let selector1;
    let selector2;
    let resultSelector;

    return {
        init: (firstSelector, secondSelector, resSelector) => {
            selector1 = document.querySelector(firstSelector)
            selector2 = document.querySelector(secondSelector)
            resultSelector = document.querySelector(resSelector)
        },
        add: () => {
            let firstNumber = Number(selector1.value)
            let secondNumber = Number(selector2.value)
            let sum = firstNumber + secondNumber
            resultSelector.value = sum
        },
        subtract: () => {
            let firstNumber = Number(selector1.value)
            let secondNumber = Number(selector2.value)
            let sum = firstNumber - secondNumber
            resultSelector.value = sum
        },
    }
}