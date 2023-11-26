function cats(arr){

    class currentCat {
        constructor(name, age){
            this.name = name
            this.age = age
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    for (let cat of arr){
        let [name, age] = cat.split(' ')
        let newCat = new currentCat(name, age)
        newCat.meow()
    }
}