function areaAndVolumeCalculator(area, vol, input){

    let obj = JSON.parse(input)

    let result = []

    for (let current of obj){
        let areaResult = area.call(current)
        let volumeResult = vol.call(current)
        result.push({area: areaResult, volume: volumeResult})
    }

    return result
}