function magicSum(arr, sum){

    let currentSum = 0;

    for (let i = 0; i<arr.length; i++){
        for (let j = i+1; j<arr.length; j++){
            currentSum = arr[i] + arr[j]
            if (currentSum === sum){
                console.log(`${arr[i]} ${arr[j]}`)
            }
        }
    }
}