function legendaryFarming(input){

    let collections = input.split(' ')

    let storage = {
        fragments: 0,
        motes: 0,
        shards: 0,
    }
    let junkStorage = {}

    for (let i = 0; i < collections.length; i+=2){
        let item = collections[i+1].toLowerCase()

        if (item === 'motes' || item === 'fragments' || item === 'shards'){
            storage[item] += Number(collections[i])
        } else {
            if (!junkStorage.hasOwnProperty(item)){
                junkStorage[item] = Number(collections[i])
            } else {
                junkStorage[item] += Number(collections[i])
            }
        }

        if (storage[item] >= 250){
            if (item === 'shards'){
                console.log('Shadowmourne obtained!')
                storage[item] -= 250
                break;
            } else if (item === 'fragments'){
                console.log('Valanyr obtained!')
                storage[item] -= 250
                break;
            } else if (item === 'motes'){
                console.log('Dragonwrath obtained!')
                storage[item] -= 250
                break;
            }
        }
    }

    let sortStorage = Object.entries(storage).sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    let sortJunk = Object.entries(junkStorage).sort((a,b) => a[0].localeCompare(b[0]))

    for (let [key, value] of sortStorage){
        console.log(`${key}: ${value}`)
    }

    for (let [key, value] of sortJunk){
        console.log(`${key}: ${value}`)
    }

}