function modernTimesOfAHashTag(input){

    let splitInput = input.split(' ')

    for (let current of splitInput){
        if (current.startsWith('#') && current.length > 1){
            if (!current.includes('0') && !current.includes('1') && !current.includes('2') && !current.includes('3') && !current.includes('4') && !current.includes('5') && !current.includes('6') && !current.includes('7') && !current.includes('8') && !current.includes('9')){
                console.log(current.slice(1))
            }
        }
    }
}