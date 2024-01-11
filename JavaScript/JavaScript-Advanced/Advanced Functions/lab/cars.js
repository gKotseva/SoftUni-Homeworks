function cars(input){
    let collectionsObject = {}
    let commandsCollection = {
        create,
        set,
        print,
    }

    function create(name, inherits, parentName) {
        collectionsObject[name] = inherits ? Object.create(collectionsObject[parentName]) : collectionsObject[name] = {}
    }

    function set(name, key, value){
        collectionsObject[name][key] = value
    }

    function print(name) {
        let objectsResults = []
        for (let objectKey in collectionsObject[name]){
            objectsResults.push(`${objectKey}:${collectionsObject[name][objectKey]}`)
        }
        console.log(objectsResults.join(','))
    }

    input.forEach(element => {
        let [command, name, key, value] = element.split(' ')
        commandsCollection[command](name, key, value)
    });
}