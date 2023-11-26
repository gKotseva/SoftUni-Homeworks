function travelTime(arr){
    
    let result = new Map ()

    for (let current of arr){
        let [country, town, price] = current.split(' > ')

        if (!result.has(country)){
            result.set(country, new Map())
        }

        if (result.get(country).has(town)){
            if (result.get(country).get(town) > price){
                result.get(country).set(town, price)
            }
        } else {
            result.get(country).set(town, price)
        }
        
    }

    let sort = Array.from(result).sort(function (a,b) {
        return a[0].toLowerCase().localeCompare(b[0].toLowerCase())
    });

    let arr1 = []
    let finalResult = []

    for (let [key,value] of sort){
        let entries = value.entries()
        let sort1 = Array.from(entries).sort((a,b) => a[1] - b[1])

        for (let current of sort1){
            let currentJoin = current.join(' -> ')
            arr1.push(currentJoin)
        }
        finalResult.push(`${key} -> ${arr1}`)
        arr1.shift()
        arr1.shift()
        arr1.shift()
    }

    for (let current of finalResult){
        let split = current.split(',')
        console.log(split.join(' '))
    }

}