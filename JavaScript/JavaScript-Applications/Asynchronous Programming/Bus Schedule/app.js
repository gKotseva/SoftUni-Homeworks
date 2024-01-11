function solve() {

    let result = document.querySelector('div#info span.info')
    let departButton = document.getElementById('depart')
    let arriveButton = document.getElementById('arrive')

    stopName = ''
    nextStopId = 'depot'

    async function depart() {
        try {
            let current = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`)

            let data = await current.json()

            if (!current.ok) {
                let error = new Error()
                error.message = current.statusText
                error.status = current.status
                throw error;
            }

            stopName = data.name
            nextStopId = data.next

            result.textContent = `Next stop ${data.name}`
            departButton.disabled = true
            arriveButton.disabled = false
        } catch (error) {
            result.textContent = `Error`
            arriveButton.disabled = true
            departButton.disabled = true
        }
    }

    function arrive() {
        result.textContent = `Arriving at ${stopName}`
        departButton.disabled = false
        arriveButton.disabled = true

    }

    return {
        depart,
        arrive
    };
}

let result = solve();