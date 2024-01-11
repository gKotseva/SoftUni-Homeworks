function aMinerTask(array){
    let storage = new Map();

    for (let i = 0; i < array.length; i+=2){
        let name = array[i]
        let quantity = Number(array[i+1])
        if (!storage.has(name)){
            storage.set(name, quantity)
        } else {
            storage.set(name, (storage.get(name) + quantity))
        }
    }
    
    for (let [key, value] of Array.from(storage.entries())){
        console.log(`${key} -> ${value}`)
    }

}