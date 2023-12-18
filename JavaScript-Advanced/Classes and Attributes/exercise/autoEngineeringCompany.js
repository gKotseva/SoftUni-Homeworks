function autoEngineeringCompany(arr){
    let storage = new Map()

    for (let current of arr){
        let [brand, model, produced] = current.split(' | ')
        if (!storage.has(brand)){
            storage.set(brand, new Map())
        }

        let mapModels = storage.get(brand)

        if (!mapModels.has(model)){
            mapModels.set(model, 0)
        }

        mapModels.set(model, mapModels.get(model) + Number(produced))
    }

    for (let brand of storage.keys()){
        console.log(brand)

        let mapModels = storage.get(brand)

        for (let model of mapModels.keys()){
            console.log(`###${model} -> ${mapModels.get(model)}`)
        }
    }

}