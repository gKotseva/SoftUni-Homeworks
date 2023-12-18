describe('function createCalculator', () => {
    beforeEach(() => {
        calculator = createCalculator()
    })

    it ('should be an object', () => {
        expect(typeof calculator).to.equal('object')
    })

    it ('initial value should be 0', () => {
        expect(calculator.get()).to.equal(0)
    })

    it ('add method', () => {
        calculator.add(10)
        expect(calculator.get()).to.equal(10)
    })

    it ('add method with string', () => {
        calculator.add("10")
        expect(calculator.get()).to.equal(10)
    })

    it ('substract method', () => {
        calculator.subtract(10)
        expect(calculator.get()).to.equal(-10)
    })

    it ('substract method with string', () => {
        calculator.subtract("10")
        expect(calculator.get()).to.equal(-10)
    })
})