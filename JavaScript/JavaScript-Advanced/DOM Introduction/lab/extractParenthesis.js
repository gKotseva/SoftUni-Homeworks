function extract(content) {
    let text = document.getElementById('content').textContent
    let regex = /\(([^)]+)\)/g

    let matches = text.matchAll(regex)

    let result = []

    for (let current of matches){
        result.push(current[1])
    }

    return result.join('; ')

    
}