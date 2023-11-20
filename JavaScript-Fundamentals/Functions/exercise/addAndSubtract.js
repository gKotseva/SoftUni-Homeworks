function addAndSubstract(n1, n2, n3){

    function add(n1, n2){
        let sumOfTwoNumbers = n1 + n2;
        return sumOfTwoNumbers;
    }

    let sum = add(n1, n2);

    function subtract(sum, n3){
        return sum - n3;
    }
    
    let result = subtract(sum, n3);

    console.log(result)

}