function palindromeIntegers(arrayOfNumbers){

    let isValid = false;

    for (let i = 0; i < arrayOfNumbers.length; i++){
        let currentNumber = arrayOfNumbers[i]
        let numberSlice = currentNumber.toString().split('')
        let reversed = numberSlice.slice().reverse()
        // let reversed = numberSlice.reverse()

        for (let j = 0; j < reversed.length; j++){
            if (numberSlice[j] === reversed[j]){
                isValid = true;
            } else {
                isValid = false;
            }
        }

        console.log(isValid)
    }

}