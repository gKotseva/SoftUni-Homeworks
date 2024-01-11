function mining(input){
    let index = 0;
    let gramsGold = input[index]
    
    let dayCounter = 0;
    let totalCounter = 0;
    let totalGrams = 0;
    let savings = 0;
    let dayBought = 0;
    let bitcoinCounter = 0;

    for (let i = 0; i < input.length; i++){
        let currentGold = input[i]
        dayCounter++
        totalCounter++
        if (dayCounter === 3){
            let stolen = currentGold / 100 * 30
            currentGold = currentGold - stolen
            dayCounter = 0
        }
        totalGrams += currentGold
        savings += currentGold * 67.51
        if (savings >= 11949.16){
            savings = savings - 11949.16
            bitcoinCounter++
        }
        if (bitcoinCounter === 1){
            dayBought = totalCounter
        }
    }

    while (savings >= 11949.16){
            savings = savings - 11949.16
            bitcoinCounter++
    }

    console.log(`Bought bitcoins: ${bitcoinCounter}`)

    if (bitcoinCounter !== 0){
        console.log(`Day of the first purchased bitcoin: ${dayBought}`)
    }

    console.log(`Left money: ${savings.toFixed(2)} lv.`)
}