function townsToJSON(input){

    input.shift()

    let result = []

    for (let i = 0; i < input.length; i++){
        let split = input[i].split('|')
        let town = split[1].trim()
        let latitude = Number(split[2])
        let longitude = Number(split[3])

        result.push({Town: town, Latitude: Number(latitude.toFixed(2)), Longitude: Number(longitude.toFixed(2))})
    }

    console.log(JSON.stringify(result))

}