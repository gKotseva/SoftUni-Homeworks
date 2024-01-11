function wordOccurence(arr){
    let map = new Map()

    for (let word of arr){
        if(map.has(word)){
            let current = map.get(word)
            map.set(word, current + 1)
        } else {
            map.set(word, 1)
        }
    }

    let sort = new Map([...map.entries()].sort((a, b) => b[1] - a[1]))

    for (let key of sort){
        console.log(`${key[0]} -> ${key[1]} times`)
    }


    
}