function fruit(fruit, weight, price){
    let weightInKg = weight / 1000
    let needed = weightInKg * price

    console.log(`I need $${needed.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`)

}