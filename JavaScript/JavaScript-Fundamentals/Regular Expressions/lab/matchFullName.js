function matchFullName(input){

    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g

    let matches = input.match(regex)

    console.log(matches.join(' '))

}