function mathOperations(num1, num2, string){

    let result;

    if (string === '+'){
        result = num1 + num2

    } else if (string === '-'){
        result = num1 - num2

    } else if (string === '*'){
        result = num1 * num2

    } else if (string === '/'){
        result = num1 / num2

    } else if (string === '%'){
        result = num1 % num2

    } else if (string === '**'){
        result = num1 ** num2
    }

    console.log(result)
}