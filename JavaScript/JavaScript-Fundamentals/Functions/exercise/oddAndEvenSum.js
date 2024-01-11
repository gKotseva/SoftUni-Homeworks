function oddAndEvenSum(number){

    let numberArray = number.toString().split('')

    let evenSum = 0;
    let oddSum = 0;


    for (let i = 0; i < numberArray.length; i++){
        let currentNumber = Number(numberArray[i])

        if (currentNumber % 2 === 0){
            evenSum += currentNumber
        } else {
            oddSum += currentNumber
        }
    
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)

}