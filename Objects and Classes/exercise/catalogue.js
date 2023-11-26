function catalogue(arr){

    let obj = {}

    for (let current of arr){
        let [name, price] = current.split(' : ')
        obj[name] = Number(price)
    }   

    let sorted = Object.keys(obj).sort((a,b) => a.localeCompare(b))

    let letter = ""

    for (let key of sorted) {
        let name = key
        if (letter !== name[0]){
            letter = name[0]
            console.log(letter)
        }
        console.log(`  ${name}: ${obj[name]}`)
    }
}