class Storage {
    storage = []
    totalCost = 0;

    constructor(capacity){
        this.capacity = capacity
        
    }

    addProduct(product){
        this.storage.push(product)
        this.totalCost += product.price * product.quantity
        this.capacity -= product.quantity
    }

    getProducts(){
        return this.storage.map(value => JSON.stringify(value)).join("\n")
    }
}