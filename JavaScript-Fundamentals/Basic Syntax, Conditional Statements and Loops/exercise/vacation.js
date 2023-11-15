function vacation(group, type, day){
    let pricePerPerson = 0;
    let total = 0;
    let discount = 0;
    let absoluteTotal = 0;

    switch(day){
        case "Friday":
            if (type === "Students"){
                pricePerPerson = 8.45
                total = pricePerPerson * group
                if (group >= 30){
                    discount = (total / 100) * 15
                    absoluteTotal = total - discount
                } else {
                    absoluteTotal = total
                }
            } else if (type === "Business"){
                pricePerPerson = 10.90
                total = pricePerPerson * group
                if (group >= 100){
                    let newGroup = group - 10
                    absoluteTotal = newGroup * pricePerPerson
                } else {
                    absoluteTotal = total
                }
            } else if (type === "Regular"){
                pricePerPerson = 15
                total = pricePerPerson * group
                if (group >= 10 && group <= 20){
                    discount = (total / 100) * 5
                    absoluteTotal = total - discount
                } else {
                    absoluteTotal = total
                }
            }

        break;
        case "Saturday":
            if (type === "Students"){
                pricePerPerson = 9.80
                total = pricePerPerson * group
                if (group >= 30){
                    discount = (total / 100) * 15
                    absoluteTotal = total - discount
                } else {
                    absoluteTotal = total
                }
            } else if (type === "Business"){
                pricePerPerson = 15.60
                total = pricePerPerson * group
                if (group >= 100){
                    let newGroup = group - 10
                    absoluteTotal = newGroup * pricePerPerson
                } else {
                    absoluteTotal = total
                }
            } else if (type === "Regular"){
                pricePerPerson = 20
                total = pricePerPerson * group
                if (group >= 10 && group <= 20){
                    discount = (total / 100) * 5
                    absoluteTotal = total - discount
                } else {
                    absoluteTotal = total
                }
            }
        break;
        case "Sunday":
            if (type === "Students"){
                pricePerPerson = 10.46
                total = pricePerPerson * group
                if (group >= 30){
                    discount = (total / 100) * 15
                    absoluteTotal = total - discount
                } else {
                    absoluteTotal = total
                }
            } else if (type === "Business"){
                pricePerPerson = 16
                total = pricePerPerson * group
                if (group >= 100){
                    let newGroup = group - 10
                    absoluteTotal = newGroup * pricePerPerson
                } else {
                    absoluteTotal = total
                }
            } else if (type === "Regular"){
                pricePerPerson = 22.50
                total = pricePerPerson * group
                if (group >= 10 && group <= 20){
                    discount = (total / 100) * 5
                    absoluteTotal = total - discount
                } else {
                    absoluteTotal = total
                }
            }
        break;
    }
    console.log(`Total price: ${absoluteTotal.toFixed(2)}`)

}