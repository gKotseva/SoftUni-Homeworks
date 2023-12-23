function attachEvents() {
    let submitButton = document.getElementById('submit')
    let inputValue = document.getElementById('location')
    let forecast = document.getElementById('forecast')
    let currentWeather = document.getElementById('current')
    let upcomingWeather = document.getElementById('upcoming')

    let conditions = {
        "Sunny": "&#x2600",
        "Partly sunny": "&#x26C5",
        "Overcast": "&#x2601",
        "Rain": "&#x2614",
        "Degrees": "&#176",
    }

    submitButton.addEventListener('click', getWeather)


    function getWeather() {
        fetch(`http://localhost:3030/jsonstore/forecaster/locations`)
        .then(response => response.json())
        .then(data => {
            let getIndex = data.findIndex(current => current.name === inputValue.value)

            if (getIndex === -1){
                throw new Error()
            }

            forecast.style.display = 'block'

            let cityCode = data[getIndex].code

            // Current conditions
            fetch(`http://localhost:3030/jsonstore/forecaster/today/${cityCode}`)
            .then(response => response.json())
            .then(data => {
                let divForecast = document.createElement('div')
                divForecast.className = 'forecasts'

                let symbolSpan = document.createElement('span')
                symbolSpan.className = 'condition symbol'
                symbolSpan.innerHTML = conditions[data.forecast.condition]
                divForecast.appendChild(symbolSpan)

                let conditionSpan = document.createElement('span')
                conditionSpan.className = 'condition'

                let span1 = document.createElement('span')
                span1.className = 'forecast-data'
                span1.textContent = data.name
                conditionSpan.appendChild(span1)
                
                let span2 = document.createElement('span')
                span2.className = 'forecast-data'
                span2.innerHTML = `${data.forecast.low}&#176;/${data.forecast.high}&#176;`
                conditionSpan.appendChild(span2)

                let span3 = document.createElement('span')
                span3.className = 'forecast-data'
                span3.textContent = data.forecast.condition
                conditionSpan.appendChild(span3)

                divForecast.appendChild(conditionSpan)
                currentWeather.appendChild(divForecast)

            })

            // 3 day conditions

            fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${cityCode}`)
            .then(response => response.json())
            .then(data => {
                let div = document.createElement('div')
                div.className = 'forecast-info'

                for (let current of data.forecast){
                    let mainSpan = document.createElement('span')
                    mainSpan.className = 'upcoming'

                    let span1 = document.createElement('span')
                    span1.className = 'symbol'
                    span1.innerHTML = conditions[current.condition]
                    mainSpan.appendChild(span1)
                    
                    let span2 = document.createElement('span')
                    span2.className = 'forecast-data'
                    span2.innerHTML = `${current.low}&#176;/${current.high}&#176;`
                    mainSpan.appendChild(span2)

                    let span3 = document.createElement('span')
                    span3.className = 'forecast-data'
                    span3.textContent = current.condition
                    mainSpan.appendChild(span3)

                    div.appendChild(mainSpan)
                }
                upcomingWeather.appendChild(div)
            })
        })
        .catch(error => {
            forecast.style.display = 'block'
            currentWeather.textContent = 'Error'
            upcomingWeather.textContent = 'Error'
        })
    }
}


attachEvents();