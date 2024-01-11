function loadingBar(number){

    let loadPercent = number / 10

    let percentBar = ''
    let counter = 0;

    let is100Percent = if100Percent();


    function checkAndAddPercent(){
        for (let i = 0; i < loadPercent; i++){
            percentBar += `%`
            counter++
        }
    }
    checkAndAddPercent(number)

    function checkAndAddDots(){
        for (let i = counter; i < 10; i++){
            percentBar += `.`
        }
    }
    checkAndAddDots(number)

    function if100Percent(){
        if (loadPercent === 10){
            return true;
        }
    }

    if (is100Percent){
        console.log(`100% Complete!`)
        console.log(`[%%%%%%%%%%]`)
    } else {
        console.log(`${number}% [${percentBar}]`)
        console.log(`Still loading...`)
    }

}