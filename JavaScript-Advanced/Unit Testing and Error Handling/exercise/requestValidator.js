function requestAValidator(obj) {
    let methods = ["GET", "POST", "DELETE", "CONNECT"]
    let versions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"]

    if (!obj.hasOwnProperty('method') || !methods.includes(obj.method)){
        throw new Error (`Invalid request header: Invalid ${'Method'}`)
    }

    let regexURI = /^[a-zA-Z.0-9]+$/gm

    if (!obj.hasOwnProperty('uri') || !regexURI.test(obj.uri) || obj.uri === ''){
        throw new Error (`Invalid request header: Invalid ${'URI'}`)
    }

    if (!obj.hasOwnProperty('version') || !versions.includes(obj.version)){
        throw new Error (`Invalid request header: Invalid ${'Version'}`)
    }

    let regexMessage = /[<>&'"\\]/gm

    if (!obj.hasOwnProperty('message') || regexMessage.test(obj.message)){
        throw new Error (`Invalid request header: Invalid ${'Message'}`)
    }

    return obj

}