function carFactory(obj){

    let storage = {
        'Small engine': {power: 90, volume: 1800},
        'Normal engine': {power: 120, volume: 2400},
        'Monster engine': {power: 200, volume: 3500},
        'Hatchback': {type: 'hatchback'},
        'Coupe': {type: 'coupe'},
        'wheels': [],
    }

    function wheels(){
        if (obj.wheelsize % 2 === 0){
            result.wheels = Array(4).fill(Math.floor(obj.wheelsize-1))
        } else {
            result.wheels = Array(4).fill(Math.floor(obj.wheelsize))
        }
    }

    let result = {}

    

    if (obj.power <= 90){
        result.model = obj.model
        result.engine = storage['Small engine']
        result.carriage = {type: obj.carriage, color: obj.color}
        wheels()

    } else if (obj.power <= 120){
        result.model = obj.model
        result.engine = storage['Normal engine']
        result.carriage = {type: obj.carriage, color: obj.color}
        wheels()

    } else if (obj.power <= 200){
        result.model = obj.model
        result.engine = storage['Monster engine']
        result.carriage = {type: obj.carriage, color: obj.color}
        wheels()
    }

    return result

}