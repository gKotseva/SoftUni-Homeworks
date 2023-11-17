function reverseArrayOfNumbers(n, input){
    let arr = [];
    let out = "";

    for (let i=0; i<n; i++){
        arr.push(input[i])
        
    }
    let reversedArray = arr.reverse()

    for (let i = 0; i < reversedArray.length; i++){
        out += (`${reversedArray[i]} `)
    }

    console.log(out)

}