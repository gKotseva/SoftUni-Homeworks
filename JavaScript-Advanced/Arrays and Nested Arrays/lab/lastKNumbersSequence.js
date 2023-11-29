function lastKNumberSequence(n, k){
    let result = [1]

    for (let i = 1; i < n; i++){
        let length  = result.length > k ? k : result.length

        let sum = 0;

        for (let j = 1; j <= length; j++){
            sum += result[result.length - j]
        }

        result.push(sum)
    }

    return result;
}