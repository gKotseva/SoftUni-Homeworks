function cookingByNumbers(number, c1, c2, c3, c4, c5){

    let currentNumber = Number(number)

    let array = [c1, c2, c3, c4, c5]

    for (let current of array){
        switch (current) {
            case "chop": {
                currentNumber = currentNumber / 2
                console.log(currentNumber)
            }
            break;
            case "dice": {
                currentNumber = Math.sqrt(currentNumber)
                console.log(currentNumber)
            }
            break;
            case "spice": {
                currentNumber = currentNumber + 1
                console.log(currentNumber)
            }
            break;
            case "bake": {
                currentNumber = currentNumber * 3
                console.log(currentNumber)
            }
            break;
            case "fillet": {
                let percentage = (currentNumber / 100) * 20
                currentNumber = currentNumber - percentage
                console.log(currentNumber)
            }
            break;
        }
    }

}