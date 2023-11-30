function townPopulation(input){

    let obj = {}

    for (let current of input){
        let split = current.split('<->')
        let city = split[0]
        let population = Number(split[1])

        if (!obj.hasOwnProperty(city)){
            obj[city] = population
        } else {
            obj[city] += population
        }
    }

    for (const key in obj) {
        console.log(`${key}: ${obj[key]}`)
    }
}