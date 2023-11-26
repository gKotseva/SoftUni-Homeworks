function convertToObject(object){
    let reverse = JSON.parse(object)

    for(let key of Object.keys(reverse)){
        console.log(`${key}: ${reverse[key]}`)
    }

}