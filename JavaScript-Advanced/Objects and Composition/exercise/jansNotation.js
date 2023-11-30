function janNotation(input){
    let result = []

    let final = 0
    let firstNum = 0
    let secondNum = 0

    for (let current of input){
        if (typeof current === 'number'){
            result.push(current)
        } else {
            if (current === '+'){
                secondNum = result.pop()
                firstNum = result.pop()
                final = firstNum + secondNum
                if (typeof firstNum !== 'number'){
                    return console.log(`Error: not enough operands!`)
                } else {
                    result.push(final)
                }                
            } else if (current === "*"){
                secondNum = result.pop()
                firstNum = result.pop()
                final = firstNum * secondNum
                if (typeof firstNum !== 'number'){
                    return console.log(`Error: not enough operands!`)
                } else {
                    result.push(final)
                }                
            } else if (current === "-"){
                secondNum = result.pop()
                firstNum = result.pop()
                final = firstNum - secondNum
                if (typeof firstNum !== 'number'){
                    return console.log(`Error: not enough operands!`)
                } else {
                    result.push(final)
                }
            } else if (current === "/"){
                secondNum = result.pop()
                firstNum = result.pop()
                final = firstNum / secondNum
                if (typeof firstNum !== 'number'){
                    return console.log(`Error: not enough operands!`)
                } else {
                    result.push(final)
                }
            }
        }
    }

    if (result.length === 1){
        console.log(result.join())
    } else {
        console.log(`Error: too many operands!`)
    }

}