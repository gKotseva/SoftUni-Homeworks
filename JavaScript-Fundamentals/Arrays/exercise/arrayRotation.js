function arrayRotation(arr, numberOfRotations){

    let newArray = [];

    for (let i = 0; i < numberOfRotations; i++){
        let first = arr[0]
        arr.shift()
        arr.push(first)
    }

    let output = ""

    for (let j = 0; j < arr.length; j++){
        if (j === arr.length-1){
            output += (`${arr[j]}`)
        } else {
            output += (`${arr[j]} `)
        }
    }

    console.log(output)

}