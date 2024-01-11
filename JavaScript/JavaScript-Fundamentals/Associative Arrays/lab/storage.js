function storage(arr){
    let map = new Map()

    for (let current of arr){
        let split = current.split(' ')
        let item = split[0]
        let quantity = Number(split[1])

        if (map.has(item)){
            let current = map.get(item)
            map.set(item, (quantity+current))
        } else {
            map.set(item, quantity)
        }
    }

    for (let key of map){
        console.log(`${key[0]} -> ${key[1]}`)
    }
}