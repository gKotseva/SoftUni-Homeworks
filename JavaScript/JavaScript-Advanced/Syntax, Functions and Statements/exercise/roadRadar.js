function roadRadar(speed, area){
    let motorwaySpeedLimit = 130;
    let interstateSpeedLimit = 90;
    let citySpeedLimit = 50;
    let residentialSpeedLimit = 20;

    let status = ''

    switch (area){
        case "city": {
            if (speed > citySpeedLimit){
                let speedAbove = speed - citySpeedLimit
                if (speedAbove <= 20){
                    status = 'speeding'
                } else if (speedAbove >= 20 && speedAbove <= 40){
                    status = 'excessive speeding'
                } else {
                    status = 'reckless driving'
                }
                console.log(`The speed is ${speedAbove} km/h faster than the allowed speed of ${citySpeedLimit} - ${status}`)
            } else {
                console.log(`Driving ${speed} km/h in a ${citySpeedLimit} zone`)
            }

        }
        break;
        case "residential": {
            if (speed > residentialSpeedLimit){
                let speedAbove = speed - residentialSpeedLimit
                if (speedAbove <= 20){
                    status = 'speeding'
                } else if (speedAbove >= 20 && speedAbove <= 40){
                    status = 'excessive speeding'
                } else {
                    status = 'reckless driving'
                }
                console.log(`The speed is ${speedAbove} km/h faster than the allowed speed of ${residentialSpeedLimit} - ${status}`)

            } else {
                console.log(`Driving ${speed} km/h in a ${residentialSpeedLimit} zone`)
            }

        }
        break;
        case "interstate": {
            if (speed > interstateSpeedLimit){
                let speedAbove = speed - interstateSpeedLimit
                if (speedAbove <= 20){
                    status = 'speeding'
                } else if (speedAbove >= 20 && speedAbove <= 40){
                    status = 'excessive speeding'
                } else {
                    status = 'reckless driving'
                }
                console.log(`The speed is ${speedAbove} km/h faster than the allowed speed of ${interstateSpeedLimit} - ${status}`)

            } else {
                console.log(`Driving ${speed} km/h in a ${interstateSpeedLimit} zone`)
            }

        }
        break;
        case "motorway": {
            if (speed > motorwaySpeedLimit){
                let speedAbove = speed - motorwaySpeedLimit
                if (speedAbove <= 20){
                    status = 'speeding'
                } else if (speedAbove >= 20 && speedAbove <= 40){
                    status = 'excessive speeding'
                } else {
                    status = 'reckless driving'
                }
                console.log(`The speed is ${speedAbove} km/h faster than the allowed speed of ${motorwaySpeedLimit} - ${status}`)

            } else {
                console.log(`Driving ${speed} km/h in a ${motorwaySpeedLimit} zone`)
            }

        }
        break;
    }
}