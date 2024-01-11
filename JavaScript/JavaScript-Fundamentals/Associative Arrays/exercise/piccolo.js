function piccolo(array){

    let garage = {}

    for (let current of array){
        let [command, carNumber] = current.split(', ')
        
        if (command === 'IN'){
            garage[carNumber] = 0;
        } else {
            delete garage[carNumber]
        }
    }

    let keys = Object.keys(garage).sort((a, b) => a.localeCompare(b))
    
    if (keys.length > 0){
        for (let current of keys){
            console.log(current)
        }
    } else {
        console.log(`Parking Lot is Empty`)
    }
}