function addAndSubstract(arr){
    let totalSum = 0;
    let newArray = []
    let newArraySum = 0;

    for (let i = 0; i < arr.length; i++){
        let currentNumber = arr[i]
        totalSum += currentNumber
        if (currentNumber % 2 === 0){
            currentNumber = currentNumber + i
            newArraySum += currentNumber
            newArray.push(currentNumber)
        } else {
            currentNumber = currentNumber - i
            newArray.push(currentNumber)
            newArraySum += currentNumber
        }
    }

    console.log(newArray)
    console.log(totalSum)
    console.log(newArraySum)

}