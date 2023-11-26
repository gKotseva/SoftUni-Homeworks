function oddOccurrences(sentence){
    let map = new Map()

    let words = sentence.split(' ')

    for (let word of words){
        let currentWord = word.toLowerCase()
        map.set(currentWord, 0);
    }

    for (let word of words){
        let currentWord = word.toLowerCase()
        if (map.has(currentWord)){
            let current = map.get(currentWord)
            map.set(currentWord, (current + 1))
        }
    }

    let current = map.entries(map)

    let resultArr = []
    for (let [key, value] of current){
        if (value % 2 !== 0){
            if (!resultArr.includes(key)){
                resultArr.push(key)
            }
        }
    }

    console.log(resultArr.join(' '))

}