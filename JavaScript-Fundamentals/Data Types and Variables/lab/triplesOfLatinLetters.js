function triplesOfLatinLetters(number){
    let letter1 = ''
    let letter2 = ''
    let letter3 = ''

    for (let i = 0; i < number; i++){
        let num = Number(i)
        letter1 = String.fromCharCode(97+num)
        for (let j = 0; j < number; j++){
            let num = Number(j)
            letter2 = String.fromCharCode(97+num)
            for (let g = 0; g < number; g++){
                let num = Number(g)
                letter3 = String.fromCharCode(97+num)
                console.log(`${letter1}${letter2}${letter3}`)
            }
        }
    }

}