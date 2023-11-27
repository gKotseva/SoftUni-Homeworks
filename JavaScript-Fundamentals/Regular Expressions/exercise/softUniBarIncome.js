function softUniBarIncome(arr){

    let regex = /%(?<customerName>[A-Z][a-z]+)%[^|$%.]*<(?<productName>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>[0-9]+.?\d*)\$/

    let totalIncome = 0;

    for (let current of arr){
        if (current === 'end of shift'){
            break;
        }

        let match = []

        if (regex.test(current)){
            match = current.match(regex)
            let price = Number(match.groups.count) * Number(match.groups.price)
            totalIncome += price
            console.log(`${match.groups.customerName}: ${match.groups.productName} - ${price.toFixed(2)}`)
        }

    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`)
}