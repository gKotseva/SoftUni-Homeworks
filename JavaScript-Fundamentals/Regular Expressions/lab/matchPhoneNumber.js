function matchPhoneNumber(input){
    let regex = /\+359([- ])2\1\d{3}\1\d{4}\b/g

    let result = []

    for (let current of input){
        let matches = current.match(regex)
        result.push(matches)
    }

    

    console.log(result[0].join(', '))


}