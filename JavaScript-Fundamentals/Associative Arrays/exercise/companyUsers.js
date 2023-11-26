function companyUsers(arr){
    let companies = new Map ()

    for (let current of arr){
        let split = current.split(' -> ')
        let companyName = split[0]
        let ID = split[1]

        if (!companies.has(companyName)){
            companies.set(companyName, new Set())
        }

        companies.get(companyName).add(ID)
    }

    let keys = companies.keys()
    let sort = Array.from(keys).sort()
    
    for (let current of sort){
        console.log(current)
        
        for (let ID of Array.from(companies.get(current))){
            console.log(`-- ${ID}`)
        }
    }
}