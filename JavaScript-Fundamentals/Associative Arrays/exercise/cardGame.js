function cardGame(arr){

    let cardPowerNum = {
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14
    }

    let carTypeNum = {
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1
    }

    let playersCards = new Map();

    for (let person of arr){
        let [playerName, cards] = person.split(': ')
        if (!playersCards.has(playerName)){
            playersCards.set(playerName, new Set())
        }
        cardsArray = cards.split(', ')
        for (let card of cardsArray){
            playersCards.get(playerName).add(card);
        }
    }

    for(let player of Array.from(playersCards)){
        let sum = 0;

        for (let card of Array.from(player[1])){
            let cardInfo = card.split('');
            let powerString = cardInfo.splice(0, cardInfo.length - 1).join("")
            let typeString = cardInfo[cardInfo.length - 1]
            let power = cardPowerNum[powerString]
            let type = carTypeNum[typeString]
            sum += power * type
        }

        console.log(`${player[0]}: ${sum}`)
    }


}