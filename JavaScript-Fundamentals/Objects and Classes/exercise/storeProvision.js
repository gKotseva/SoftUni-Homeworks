function storeProvision(currentStock, orderedForDelivery){
    let obj = {};

    for (let i = 0; i < currentStock.length; i+=2){
        let name = currentStock[i]
        let quantity = Number(currentStock[i + 1])
        obj[name] = quantity
    }

    for (let i = 0; i < orderedForDelivery.length; i+=2){
        let name = orderedForDelivery[i]
        let quantity = Number(orderedForDelivery[i+1])

        if (obj.hasOwnProperty(name)){
            obj[name] += quantity;
        } else {
            obj[name] = quantity;
        }
    }
    
    for (let key of Object.keys(obj)){
        console.log(`${key} -> ${obj[key]}`)
    }
}