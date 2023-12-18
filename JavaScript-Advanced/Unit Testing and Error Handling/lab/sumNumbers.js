describe ('function sum', () => {
    it('should have an input array', () => {
        let arr = [1, 2, 3, 4]

        let result = sum(arr)

        expect(result).to.be.equal(10)
    })
})