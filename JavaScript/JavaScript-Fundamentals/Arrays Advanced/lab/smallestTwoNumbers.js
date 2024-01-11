function smallestTwoNumbers(arr){
    let sortedInAscending = arr.sort((a, b) => {
        return a - b;
    })

    let theTwoElementResult = sortedInAscending.slice(0, 2)
    console.log(theTwoElementResult.join(` `))

}