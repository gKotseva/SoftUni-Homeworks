function sorting(arr){

    let sortArray = arr.sort((a, b) => a - b);

    let resultArr = []

    while (arr.length !== 0){
        resultArr.push(arr.pop());
        resultArr.push(arr.shift())
    }

    console.log(resultArr.join(' '))
}