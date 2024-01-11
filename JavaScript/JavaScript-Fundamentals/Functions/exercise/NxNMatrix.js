function matrix(number){

    let numbersPerRowString = ''

    function rows(){
        for (let i = 0; i < number; i++){
            numbersPerRowString += `${number} `
        }
    }
    rows(number)

    function numbersPerRow(){
        for (let i = 0; i < number; i++){
            console.log(numbersPerRowString)
        }

    }
    numbersPerRow(number)

}