describe ('checkColors', () => {
    it ('should be black', () => {
        expect(rgbToHexColor(0,0,0)).to.equal('#000000')
    })

    it ('should be white', () => {
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF')
    })

    it ('should be green', () => {
        expect(rgbToHexColor(3, 252, 36)).to.equal('#03FC24')
    })

    it ('should test for missing parameters', () => {
        expect(rgbToHexColor(0, 0)).to.be.undefined
        expect(rgbToHexColor(0)).to.be.undefined
        expect(rgbToHexColor()).to.be.undefined
    })

    it ('should test for lower invalid parameters', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined
    })

    it ('should test for higher invalid parameters', () => {
        expect(rgbToHexColor(800, 0, 0)).to.be.undefined
        expect(rgbToHexColor(0, 800, 0)).to.be.undefined
        expect(rgbToHexColor(0, 0, 800)).to.be.undefined
    })

    it ('should test for invalid string parameters', () => {
        expect(rgbToHexColor('h', 0, 0)).to.be.undefined
        expect(rgbToHexColor(0, 'h', 0)).to.be.undefined
        expect(rgbToHexColor(0, 0, 'h')).to.be.undefined
    })
})