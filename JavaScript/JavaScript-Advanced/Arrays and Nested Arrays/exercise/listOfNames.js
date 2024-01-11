function listOfNames(input){

    let sort = input.sort((nameA, nameB) => {
        return nameA.localeCompare(nameB)
    })

    sort.forEach((name, index) => console.log(`${index + 1}.${name}`))
}