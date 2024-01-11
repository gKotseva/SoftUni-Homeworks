function cutAndReverse(input){
    let length = input.length
    let firstPart = length / 2
 
    let word = input
 
    let first = word.slice(0, firstPart).split('').reverse()
    let second = word.slice(firstPart).split('').reverse()
 
    console.log(first.join(''))
    console.log(second.join(''))
     
 }