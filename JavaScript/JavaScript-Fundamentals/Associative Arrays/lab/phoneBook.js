function phoneBook(arr){
    let object = {};

    for (let key of arr){
        let split = key.split(' ')
        let name = split[0]
        let phone = split[1]

        object[name] = phone
    }

    for (let key in object){
        console.log(`${key} -> ${object[key]}`)
    }
}