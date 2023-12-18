describe ('function isSymmetric', () => {
    it ('should be a symmetric array', () => {
        expect(isSymmetric([1,2,2,1])).to.be.true
    })

    it ('should returns false for non-symmetric arrays', () => {
        expect(isSymmetric([1,2,3])).to.be.false
    })

    it ('should return false if its not an array', () => {
        expect(isSymmetric(5)).to.be.false
    })

    it ('works with symmetric odd length array', () => {
        expect(isSymmetric([1,2,1])).to.be.true
    })

    it ('works with symmetric string array', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true
    })

    it ('returns false for string param', () => {
        expect(isSymmetric('abba')).to.be.false
    })

    it ('returns false for type mismatch elements', () => {
        expect(isSymmetric([1,2,'1'])).to.be.false
    })
})