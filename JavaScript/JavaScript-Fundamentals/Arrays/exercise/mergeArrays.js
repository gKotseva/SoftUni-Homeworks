function mergeArrays(arr1, arr2){
    let arr3 = [];

    for (let i = 0; i < arr1.length; i++){
        if (i % 2 === 0){
            arr1[i] = Number(arr1[i])
            arr2[i] = Number(arr2[i])
            arr3.push(arr1[i] + arr2[i])
        } else {
            arr3.push(`${arr1[i]}${arr2[i]}`)
        }

    }

    let output = "";

    for (let j = 0; j < arr3.length; j++){
        if (j === arr3.length-1){
            output += (`${arr3[j]}`)
        } else {
            output += (`${arr3[j]} - `)
        }
    }

    console.log(output)
}