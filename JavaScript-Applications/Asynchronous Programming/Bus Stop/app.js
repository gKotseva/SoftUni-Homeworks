async function getInfo() {
   
    let stopId = document.getElementById('stopId').value
    let url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`

    let resultBuses = document.getElementById('buses')
    resultBuses.innerHTML = ''


    try {
        let response = await fetch(url)

        let data = await response.json()
    
        let resultStopId = document.getElementById('stopName').textContent = data.name
    
        for (let [busId, time] of Object.entries(data.buses)){
            let li = document.createElement('li')
            li.textContent = `Bus ${busId} arrives in ${time} minutes`
            resultBuses.appendChild(li)
        }
    } catch (error){
        document.getElementById('stopName').textContent = 'Error'
    }

}