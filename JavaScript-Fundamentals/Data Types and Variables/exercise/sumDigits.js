function sumOfDigits (number){

    let numberToString = String(number)

    let sum = 0;
    
    for (let i=0; i < numberToString.length; i++){
        let currentNum = Number(numberToString[i])
        sum += currentNum
    }

    console.log(sum)

}