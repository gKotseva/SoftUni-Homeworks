function furniture(input){
    let storage = {};
    let sum = 0;
    let regex = />>(?<item>[A-Z][A-Za-z]+)<<(?<price>[0-9.]+[0-9]+)!(?<quantity>\d+)/;

    console.log(`Bought furniture:`)
    for (let current of input){
        if (current === "Purchase"){
            break;
        } 

        if (regex.test(current)){
            let product = regex.exec(current)
            let price = Number(product.groups.price) * Number(product.groups.quantity)
            console.log(product.groups.item)
            sum += price
        }
    }

    console.log(`Total money spend: ${sum.toFixed(2)}`)

}