function matchDates(input){
    let regex = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g

    let result = []

    for (let current of input){
        let matches = [...current.matchAll(regex)]
        for (let date of matches){
            console.log(`Day: ${date.groups.day}, Month: ${date.groups.month}, Year: ${date.groups.year}`)
        }
    }


}