function distictArray(arr){

    let finallArray = []

    for (let i = 0; i < arr.length; i++){
        if (finallArray.indexOf(arr[i]) === -1){
            finallArray.push(arr[i])
        }
    }
    
    console.log(finallArray.join(' '))
}