function juiceFlavours(arr){
    let bottles = new Set()
    let storage = {}


    for (let current of arr){
        let [juice, quantity] = current.split(' => ')
        quantity = Number(quantity)

        if (!storage.hasOwnProperty(juice)){
            storage[juice] = quantity
        } else {
            storage[juice] += quantity
        }

        if (storage[juice] >= 1000){
            let bottlesCount = 0
            let currentCount = Math.trunc(storage[juice] / 1000)
            for (let i = 0; i < currentCount; i++){
                storage[juice] -= 1000
                bottlesCount++

            }

            if (!bottles.hasOwnProperty(juice)){
                bottles[juice] = bottlesCount
            } else {
                bottles[juice] += bottlesCount
            }
        }
    }

    for (let current in bottles){
        console.log(`${current} => ${bottles[current]}`)
    }
}