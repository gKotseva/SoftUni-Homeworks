function train(input){
    let numberOfPassangersInAWagon = (input[0]).split(' ').map(Number);
    let maxCapacityPerWagon = Number(input[1])
    let commands = input.slice(2)

    for (let i = 0; i < commands.length; i++){
        let tokens = commands[i].split(' ')
        if (tokens[0] === "Add"){
            let numberOfPassengers = Number(tokens[1])
            numberOfPassangersInAWagon.push(numberOfPassengers)
        } else {
            let newPassengers = Number(tokens)
            for (let k = 0; k < numberOfPassangersInAWagon.length; k++){
                if ((newPassengers + numberOfPassangersInAWagon[k]) <= maxCapacityPerWagon){
                    numberOfPassangersInAWagon[k] += newPassengers
                    break;
                }
            }
        }
    }

    console.log(numberOfPassangersInAWagon.join(` `))

}