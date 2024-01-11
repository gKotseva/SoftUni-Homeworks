function division(number){

    let current = 0;

    if (number % 2 === 0){
        current = 2
    } 

    if (number % 3 === 0){
        current = 3
    } 

    if (number % 6 === 0){
        current = 6
    }

    if (number % 7 === 0){
        current = 7
    } 

    if (number % 10 === 0){
        current = 10
    }

    if (!(number % 2 === 0) && !(number % 3 === 0) && !(number % 6 === 0) && !(number % 7 === 0) && !(number % 10 === 0)){
        console.log(`Not divisible`)
        return;
    }
    
    console.log(`The number is divisible by ${current}`)
}