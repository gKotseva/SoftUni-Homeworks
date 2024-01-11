function passwordGenerator(array){

    let pass1 = array[0]+array[1]

    let counter = array[2].length
    let i = 0;

    let secondWord = array[2].toUpperCase()

    let pass = pass1
    
    for (let char of pass1){
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            pass = pass.replace(char, secondWord[i])
            i++
            if (i === counter){
                i = 0;
            }
        }
    }

    let result = pass.split('').reverse()

    console.log(`Your generated password is ${result.join('')}`)

}