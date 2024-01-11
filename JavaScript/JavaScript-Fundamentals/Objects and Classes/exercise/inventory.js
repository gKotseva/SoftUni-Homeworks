function inventory(arr){
    let store = []
    let min = Number.MIN_SAFE_INTEGER

    for (let command of arr){
        let [name, level, items] = command.split(' / ')  
        store.push({Hero:name, level:Number(level), items:items})
    }

    store.sort((a,b) => a.level - b.level);

    for(let hero of store){
        console.log(`Hero: ${hero.Hero}`)
        console.log(`level => ${hero.level}`)
        console.log(`items => ${hero.items}`)
    }
}