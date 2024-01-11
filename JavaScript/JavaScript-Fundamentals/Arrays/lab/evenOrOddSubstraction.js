function evenAndOddSubtraction(arr){

    let even = 0;
    let odd = 0;

    for (let i = 0; i < arr.length; i++){
        let number = Number(arr[i])

        if (number % 2 === 0){
            even += number
        } else {
            odd += number
        }
    }

    console.log(even - odd)

}