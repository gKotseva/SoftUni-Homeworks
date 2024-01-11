function aggregateElements(array){

    let sum = 0;
    let sum2 = 0;
    let concat = '';

    for (let current of array){
        sum += current
    }

    for (let current of array){
        sum2 += 1 / current
    }

    for (let current of array){
        concat += String(current)
    }

    console.log(sum)
    console.log(sum2)
    console.log(concat)
}