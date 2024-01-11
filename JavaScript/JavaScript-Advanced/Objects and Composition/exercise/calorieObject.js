function calorieObject(arr){

    let obj = {}

    for (let i = 0; i < arr.length; i+=2){
        let food = arr[i]
        let calorie = Number(arr[i+1])

        obj[food] = calorie
    }

    console.log(obj)

}