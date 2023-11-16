function amazingNumbers(number){

    let sumOfDigits = 0;
    let numberAsString = String(number)

    let isAmazing = false;

    for(let i = 0; i < numberAsString.length; i++){
        let currentDigit = Number(numberAsString[i])
        sumOfDigits += currentDigit
    }

    let sumOfDigitsString = String(sumOfDigits)

    for (let i = 0; i < sumOfDigitsString; i++){
        let currentNumber = Number(sumOfDigitsString[i])
        if (currentNumber === 9){
            isAmazing = true;
            break;
        }
    }

    if (isAmazing){
        console.log(`${number} Amazing? True`)
    } else {
        console.log(`${number} Amazing? False`)
    }
}