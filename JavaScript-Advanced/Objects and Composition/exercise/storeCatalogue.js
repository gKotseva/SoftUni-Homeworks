function storageCatalogue(input){

    let result = {}

    for (let current of input){
        let [product, price] = current.split(' : ')
        price = Number(price)

        result[product] = price
    }

    let sort = Object.keys(result).sort((a, b) => a.localeCompare(b))

    let letter = ''

    for (let current of sort){
        if (letter === current[0]){
            console.log(`  ${current}: ${result[current]}`)
        } else {
            letter = current[0]
            console.log(letter)
            console.log(`  ${current}: ${result[current]}`)
        }
    }

}