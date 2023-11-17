function equalArrays(arr1, arr2){

    let sum = 0;
    let isEqual = false;

    for (let i = 0; i < arr1.length; i++){
        let numberArr1 = Number(arr1[i])
        let numberArr2 = Number(arr2[i])
        if (arr1[i] === arr2[i]){
            sum += numberArr1
            isEqual = true;
        } else {
            isEqual = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`)
            break;
        }
        
    }

    if (isEqual){
        console.log(`Arrays are identical. Sum: ${sum}`)
    }

}