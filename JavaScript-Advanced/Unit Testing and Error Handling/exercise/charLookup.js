describe('function lookupChar', () => {
    it ('if the fist input is not a string', () => {
        expect(lookupChar(4, 4)).to.be.undefined
    })

    it ('if the second input is not a number', () => {
        expect(lookupChar(4, 'k')).to.be.undefined
    })

    it ('if the input is only a string', () => {
        expect(lookupChar('gabi')).to.be.undefined
    })

    it ('if the input is only a number', () => {
        expect(lookupChar(9)).to.be.undefined
    })

    it ('checking if the index is in valid length', () => {
        expect(lookupChar('gabi', 2)).to.equal('b')
    })

    it ('checking if the index is in max valid length', () => {
        expect(lookupChar('gabi', 5)).to.equal('Incorrect index')
    })

    it ('checking if the index is in lower valid length', () => {
        expect(lookupChar('gabi', -1)).to.equal('Incorrect index')
    })

    it ('checking if the index is an integer', () => {
        expect(lookupChar('gabi', 2.3)).to.be.undefined
    })
})