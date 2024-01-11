function lowerPrices(input){

    let obj = {}

    for (let current of input){
        let [town, product, price] = current.split(' | ')
        price = Number(price)

        if (obj.hasOwnProperty(product)){
            if (obj[product][1] <= price){
                continue;
            } else {
                obj[product] = [town, price]
            }

        } else {
            obj[product] = [town, price]
        }
    }

    for (let current in obj){
        console.log(`${current} -> ${obj[current][1]} (${obj[current][0]})`)
    }

}