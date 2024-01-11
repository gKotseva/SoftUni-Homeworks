function smallestOfThreeNumbers(n1,n2,n3){
    let minNumber = Number.MAX_SAFE_INTEGER

    if (n1 < minNumber) minNumber = n1;
    if (n2 < minNumber) minNumber = n2;
    if (n3 < minNumber) minNumber = n3;

    return minNumber;
}