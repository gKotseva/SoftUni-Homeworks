function lettersChangeNumbers(input){

    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
    
    let split = input.split(' ')

    let sum = 0;

    for (let current of split){
        let currentSplit = current.split('')
        let arr = currentSplit.slice()
        let first = current[0]
        let last = currentSplit[currentSplit.length-1]

        arr.shift()
        arr.pop()

            if (first === String(first.toLowerCase())){
                let number = Number(arr.join(''))
                let indexOf = alphabet.indexOf(first.toLowerCase())
                let index = indexOf+1
                sum += index * number
            } else if (first === String(first.toUpperCase())){
                let number = Number(arr.join(''))
                let indexOf = alphabet.indexOf(first.toLowerCase())
                let index = indexOf+1
                sum += (number / index)
            }
            
            if (last === String(last.toUpperCase())){
                let number = Number(arr.join(''))
                let indexOf = alphabet.indexOf(last.toLowerCase())
                let index = indexOf+1
                sum -= index
            } else if (last === String(last.toLowerCase())){
                let number = Number(arr.join(''))
                let indexOf = alphabet.indexOf(last.toLowerCase())
                let index = indexOf+1
                sum += index
            }
    }

    console.log(sum.toFixed(2))
}