function breakfastRobot(command){
    let recepies = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    }

    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    return function handingInput(input) {
        let handler = commandHandler()
        let [command, value, count] = input.split(' ')
        return handler[command](value, count)
    }

    function commandHandler(){
        return {
            restock: (value, count) => {
                stock[value] += Number(count)
                return 'Success'
            },
            prepare: (value, count) => {
                let wantedCount = recepies[value]
                for (let [macro, count] of Object.entries(recepies[value])){
                    if (stock[macro] < count){
                        return `Error: not enough ${macro} in stock`
                    }
                }

                for (let i = 0; i < count; i++){
                    for (let [macro, count] of Object.entries(recepies[value])){
                        stock[macro] -= Number(count)
                    }
                }
                return 'Success'
            },
            report: () => {
                let result = ''
                for (let [item, currentStock] of Object.entries(stock)){
                    result += `${item}=${currentStock} `
                }
                return result.trim()
            }
        }
    }


}