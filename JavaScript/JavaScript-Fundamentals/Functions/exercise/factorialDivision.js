function factorialDivision(n1, n2){

    let firstResult = n1;
    let secondResult = n2;

    function firstNumberFactorialDivison(n1){
        for (let i = n1 - 1; i >= 1; i--){
            firstResult = firstResult * i
        }

    }
    firstNumberFactorialDivison(n1)

    function secondNumberFactorialDivison(n2){
        for (let i = n2 - 1; i >= 1; i--){
            secondResult = secondResult * i
        }

    }
    secondNumberFactorialDivison(n2)

    console.log((firstResult / secondResult).toFixed(2))
    
}