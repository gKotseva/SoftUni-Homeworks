function listProcessor(input) {
    let result = []

    for (let current of input) {
        let [command, string] = current.split(' ')
        function check () {
            if (command === 'add') {
                result.push(string)
            }
            if (command === 'remove') {
                result = result.filter(word => word !== string).slice(string)
            }
            if (command === 'print') {
                console.log(result.join(','))
            }
        }
        check()
    }
}