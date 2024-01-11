function meetings(arr){
    let obj = {}

    for (let meeting of arr){
        let split = meeting.split(' ')
        let day = split[0]
        let name = split[1]

        if(obj.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`)
        } else {
            obj[day] = name
            console.log(`Scheduled for ${day}`)
        }
    }

    for (let key in obj){
        console.log(`${key} -> ${obj[key]}`)
    }
}