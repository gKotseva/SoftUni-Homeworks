function oddNumbers(n){
    let total = 0;
    let counter = 0;

    for(let i = 1; i <= 100; i++){
        if (!(i % 2 === 0)){
            counter++
            if (counter <= n){
            console.log(i)
            total += i
            } else {
                break;
            }
        }
    }
    console.log(`Sum: ${total}`)

}