function deckOfCards(cards) {
    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validSuits = ['S', 'H', 'D', 'C'];
    let result = []

    let suitSymbols = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };

    for (let current of cards) {
        let face = ''
        let suit = ''
        if (current.length > 2){
            face = current[0] + current[1]
            suit = current[2]
        } else {
            [face, suit] = current.split('')
        }
        
        if (!validFaces.includes(face) || !validSuits.includes(suit)) {
            console.log(`Invalid card: ${current}`)
            return;
        } else {
            result.push(`${face}${suitSymbols[suit]}`)
        }
    }

    console.log(result.join(' '))
}