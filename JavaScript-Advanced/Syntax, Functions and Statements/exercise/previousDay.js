function previousDay(year,month,day){

    let previousDay = new Date(year, month - 1, day - 1)
    let newYear = previousDay.getFullYear()
    let newMonth = previousDay.getMonth() + 1
    let newDay = previousDay.getDate()

    console.log(`${newYear}-${newMonth}-${newDay}`)
}