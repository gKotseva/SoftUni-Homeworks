function wordTracker(arr){
    let wordsToSearch = arr.shift().split(' ');
    let result = {};

    for (let word of wordsToSearch){
        result[word] = 0
    }

    for (let currentWord of arr){
        if (result.hasOwnProperty(currentWord)){
            result[currentWord] += 1
        }
    }

    let sort = Object.entries(result).sort((a, b) => b[1] - a[1])
    
    for (let [key, counter] of sort){
        console.log(`${key} - ${counter}`)
    }

}