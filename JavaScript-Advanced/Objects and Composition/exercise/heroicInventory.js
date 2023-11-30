function heroicInventory(input){

    let result = []

    for (let current of input){
        let [name, level, items] = current.split(' / ')
        level = Number(level)

        items = items ? items.split(', ') : []

        result.push({name, level, items})
    }

    console.log(JSON.stringify(result))

}