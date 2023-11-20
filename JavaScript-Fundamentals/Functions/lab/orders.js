function orders(order, count){

    let result = 0;

    switch(order){
        case "coffee":
            result += count * 1.50;
            break;
        case "water":
            result += count * 1.00;
            break;
        case "coke":
            result += count * 1.40;
            break;
        case "snacks":
            result += count * 2.00;
            break;
    }

    return(result.toFixed(2))

}