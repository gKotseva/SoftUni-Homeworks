describe ('function isOddOrEven', () => {
    it ('if its a number not a string', () => {
        expect(isOddOrEven(1)).to.be.undefined
    })

    it('if its a array not a string', () => {
        expect(isOddOrEven([1,2,3])).to.be.undefined
    })

    it('if its a object not a string', () => {
        expect(isOddOrEven({key:'whatever'})).to.be.undefined
    })

    it('checking if the string is even', () => {
        expect(isOddOrEven('gabi')).to.equal('even')
    })

    it('checking if the string is odd', () => {
        expect(isOddOrEven('gabik')).to.equal('odd')
    })
})