function negativeOrPositive(arr){

    let resultArray = [];

    for (let i = 0; i < arr.length; i++){
        let number = Number(arr[i])

        if (number < 0){
            resultArray.unshift(number)
        } else {
            resultArray.push(number)
        }
    }
    console.log(resultArray.join(`\n`))

}