function addAndRemoveElements(input){

    let result = []

    let initialNumber = 0

    for (let current of input){
        initialNumber++
        if (current === 'add'){
            result.push(initialNumber)
        } else {
            result.pop()
        }
    }

    if (result.length <= 0){
        console.log(`Empty`)
    } else {
        for (let current of result){
            console.log(current)
        }
    }

}