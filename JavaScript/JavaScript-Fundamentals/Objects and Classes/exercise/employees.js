function employees(employees){
    let obj = {};

    for (let name of employees){
        obj[name] = name.length
    }

    for (let key of Object.keys(obj)){
        console.log(`Name: ${key} -- Personal Number: ${obj[key]}`)
    }

}