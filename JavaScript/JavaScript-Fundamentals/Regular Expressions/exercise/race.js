function race(arr){
    let arrayParticipants = arr.shift().split(', ')
    let participants = {}

    let regexName = /[A-Za-z]/g
    let regexDistance = /\d/g

    for (let participant of arrayParticipants){
        participants[participant] = 0;
    }

    for (let currentLine of arr){
        if (currentLine === 'end of race'){
            break;
        }

        let name = currentLine.match(regexName).join('')
        let distance = currentLine.match(regexDistance)

        for (let current of distance){
            if (participants.hasOwnProperty(name)){
                participants[name] += Number(current)
            }
        }
    }

    let entries = Object.entries(participants).sort((a,b) => b[1] - a[1])

    console.log(`1st place: ${entries[0][0]}`)
    console.log(`2nd place: ${entries[1][0]}`)
    console.log(`3rd place: ${entries[2][0]}`)

}