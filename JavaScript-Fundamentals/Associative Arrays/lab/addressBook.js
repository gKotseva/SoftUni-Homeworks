function addressBook(arr){
    let obj = {};

    for (let current of arr){
        let split = current.split(':')
        let name = split[0]
        let address = split[1]
        obj[name] = address
    }

    let keys = Object.keys(obj).sort()

    for (let key of keys){
        console.log(`${key} -> ${obj[key]}`)
    }

}