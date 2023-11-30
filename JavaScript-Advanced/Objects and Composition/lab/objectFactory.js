function objectFactory(library, orders){

    let result = []

    for (let order of orders){
        let obj = Object.assign({}, order.template)
        for (let methodName of order.parts){
            obj[methodName] = library[methodName]
        }

        result.push(obj)
    }

    return result

}