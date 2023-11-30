function encodeAndDecodeMessages() {
    let message = document.getElementsByTagName('textarea')[0]
    let decodedMessage = document.getElementsByTagName('textarea')[1]

    let buttonEncode = document.getElementsByTagName('button')[0].addEventListener('click', encode)
    let buttonDecode = document.getElementsByTagName('button')[1].addEventListener('click', decode)

    function encode(e){
        let arrayEncode = Array.from(message.value).map((a) => a.charCodeAt(a) + 1)
        let encode = []

        for (let current of arrayEncode){
            let newWord = String.fromCharCode(current)
            encode.push(newWord)
        }

        message.value = ''
        decodedMessage.textContent = encode.join('')
        
    }

    function decode(e){
        let arrayDecode = Array.from(decodedMessage.value).map((a) => a.charCodeAt(a) - 1)
        let decode = []

        for (let current of arrayDecode){
            let newWord = String.fromCharCode(current)
            decode.push(newWord)
        }

        decodedMessage.textContent = decode.join('')
    }
    
}