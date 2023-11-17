function condenseArrayToNumber(arr){
    let sum = 0;

    // console.log(arr.length)

    let newArray = []

    while(arr.length > 1){
        for (let i = 0; i <= arr.length; i++){
            if (typeof arr[i+1] === 'number'){
                newArray[i] = arr[i] + arr[i+1]
            }
        }
        arr = newArray
        newArray = []
    }

    console.log(arr[0])
}