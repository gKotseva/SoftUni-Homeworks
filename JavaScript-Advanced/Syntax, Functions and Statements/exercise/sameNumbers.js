function sameNumbers(number){
    let array = number.toString().split('')

    let result = false;
    let sum = 0;

    for (let current of array){
        if (current === array[0]){
            result = true;
        } else {
            result = false;
        }
        sum += Number(current)
    }

    console.log(result)
    console.log(sum)

}