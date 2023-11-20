function searchForANumber(arr1, arr2){
    let numbersToTake = arr2[0]
    let numbersToDelete = arr2[1]
    let numberToSearch = arr2[2]

    let counter = 0;

    arr1.splice(numbersToTake)
    arr1.splice(0, numbersToDelete)

    for (let current of arr1){
        if (current === numberToSearch){
            counter++
        }
    }

    console.log(`Number ${numberToSearch} occurs ${counter} times.`)

}