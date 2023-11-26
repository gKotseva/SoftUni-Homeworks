function makeADictionary(dataAsJson){
    let collection = {};

    for (let line of dataAsJson){
        let obj = JSON.parse(line)
        let keys = Object.keys(obj)
        collection[keys[0]] = obj[keys[0]]
    }

    let sortKey = Object.keys(collection).sort((keyA, keyB) => keyA.localeCompare(keyB))

    for (let key of sortKey){
        console.log(`Term: ${key} => Definition: ${collection[key]}`)
    }

}