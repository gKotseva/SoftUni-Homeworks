function towns(arr){
    let obj = {
        town: "",
        latitude: 0,
        longitude: 0,
    }

    for (let key of arr){
        let split = key.split(' | ')
        obj.town = split[0]
        obj.latitude = Number(split[1]).toFixed(2)
        obj.longitude = Number(split[2]).toFixed(2)
        console.log(obj) 
    }

}