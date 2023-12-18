function tickets(array, sortingCriteria){

    let storage = []

    class Ticket { 
        constructor (destination, price, status){
            this.destination = destination
            this.price = Number(price)
            this.status = status
        }
    }

    for (let current of array){
        let [destination, price, status] = current.split('|')
        storage.push(new Ticket(destination, price, status))
    }

    if (sortingCriteria === 'destination'){
        storage.sort((a,b) => a.destination.localeCompare(b.destination))

    } else if (sortingCriteria === 'price'){
        storage.sort((a,b) => a.price - b.price)

    } else {
        storage.sort((a,b) => a.status.localeCompare(b.status))
    }
    
    return storage
}