function rounding(n1, n2){
    if (n2 > 15){
        n2 = 15
    }
    
    let number = n1.toFixed(n2)

    console.log(parseFloat(number))

}