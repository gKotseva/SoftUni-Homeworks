function charactersInRange(char1, char2){
    let rangeStart = Math.min(char1.charCodeAt(), char2.charCodeAt());
    let rangeEnd = Math.max(char1.charCodeAt(), char2.charCodeAt());

    let result = '';

    for (let i = rangeStart + 1; i < rangeEnd; i++){
        let singleChar = String.fromCharCode(i)
        result += (`${String.fromCharCode(i)} `);
    }

    console.log(result);
}