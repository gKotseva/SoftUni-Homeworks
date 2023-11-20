function houseParty(arr){

    let party = []

    for (let i = 0; i < arr.length; i++){
        let command = arr[i].split(' ')
        let nameOfTheGuest = command[0]
        
        if (command.length <= 3){
            if (party.includes(nameOfTheGuest)){
                console.log(`${nameOfTheGuest} is already in the list!`)
            } else {
                party.push(nameOfTheGuest)
            }
        } else {
            if (party.includes(nameOfTheGuest)){
                let index = party.indexOf(nameOfTheGuest)
                party.splice(index, index)
            } else {
                console.log(`${nameOfTheGuest} is not in the list!`)
            }
        }
    }

    console.log(party.join(`\n`))
}