function createPerson(firstName, lastName){
    let result  = {
        firstName: firstName,
        lastName: lastName
    }

    Object.defineProperty(result, 'fullName', {
        enumerable: true,
        configurable: true,
        get (){
            return this.firstName + ' ' + this.lastName
        },
        set (name){
            let names = name.split(' ')
            if (names.length === 2){
                [this.firstName, this.lastName] = name.split(' ')
            }
        }
    })

    return result
}