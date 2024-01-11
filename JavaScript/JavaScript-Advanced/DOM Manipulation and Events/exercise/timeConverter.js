function attachEventsListeners() {
    let ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    }

    function convert(value, unit){
        let inDays = value / ratios[unit]

        return {
            days: inDays,
            hours: inDays * ratios.hours,
            minutes: inDays * ratios.minutes,
            seconds: inDays * ratios.seconds,
        }
    }

    let daysInput = document.getElementById('days')
    let minutesInput = document.getElementById('minutes')
    let hoursInput = document.getElementById('hours')
    let secondsInput = document.getElementById('seconds')

    document.querySelector('main').addEventListener('click', onClick)

    function onClick (event) {
        if (event.target.tagName === 'INPUT' && event.target.type === 'button'){
            let input = event.target.parentElement.querySelector('input[type= "text"]')
            let inputValue = Number(input.value)
            let time = convert(inputValue, input.id)

            daysInput.value = time.days
            minutesInput.value = time.minutes
            hoursInput.value = time.hours
            secondsInput.value = time.seconds
        }
    }

}