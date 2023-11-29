function rotateAnArray(array, number){

    for (let i = 0; i < number; i++){
        let removed = array.pop()
        array.unshift(removed)
    }

    console.log(array.join(' '))

}