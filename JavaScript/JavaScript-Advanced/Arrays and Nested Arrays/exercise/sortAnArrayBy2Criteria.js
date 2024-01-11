function sortArrayBy2Criteria(input){
    let sortByLength = input.sort((a, b) => (a.length - b.length) || a.localeCompare(b))

    sortByLength.forEach(name => console.log(`${name}`))

}