function partyTime(array){
    let guestListVIP = [];
    let guestList = [];

    let index = 0;
    let command = array[index]

    while (command !== "PARTY"){

        if (command[0] === '0' || command[0] === '1' || command[0] === '2' || command[0] === '3' || command[0] === '4' || command[0] === '5' || command[0] === '6' || command[0] === '7' || command[0] === '8' || command[0] === '9'){
            guestListVIP.push(command)
        } else {
            guestList.push(command)
        }
        array.shift()
        command = array[index]
    }

    array.shift()

    let counter = 0;

    for (let guest of array){
        if (guestListVIP.includes(guest)){
            let index = guestListVIP.indexOf(guest)
            guestListVIP.splice(index, 1)
        } else if (guestList.includes(guest)){
            counter++
            let index = guestList.indexOf(guest)
            guestList.splice(index, 1)
        }
    }

    console.log(guestListVIP.length + guestList.length);

    for (let guest of guestListVIP){
        console.log(`${guest}`)
    }

    for (let guest of guestList){
        console.log(`${guest}`)
    }
}