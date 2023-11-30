function createSortedList(){

    let result = {
        numbersList: [],
        add: function (number) {
            this.numbersList.push(number)
            this.numbersList.sort(this.compare)
            this.size += 1

            return result
        },
        remove: function(index) {
            this.validateIndex(index)
            this.numbersList.splice(index, 1)
            this.size -= 1
            
            return result
        },
        get: function(index) {
            this.validateIndex(index)
            return this.numbersList[index]

        },
        size: 0,
        validateIndex: function(index){
            if (index < 0 || index >= this.numbersList.length){
                throw new Error
            }
        },
        compare: function (a, b){
            return a - b
        }
    }
    return result
}