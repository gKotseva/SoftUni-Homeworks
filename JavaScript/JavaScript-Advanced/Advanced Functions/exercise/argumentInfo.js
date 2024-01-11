function argumentInfo(...commands){
    let result = {}

    for (let current of commands){
        let type = typeof(current)
        console.log(`${type}: ${current}`)

        if (!result.hasOwnProperty(type)){
            result[type] = 0
        }

        result[type] += 1
    }

    let final = ''
    for (let current in result){
        final += `${current} = ${result[current]}\n`
    }
    
    console.log(final)

}