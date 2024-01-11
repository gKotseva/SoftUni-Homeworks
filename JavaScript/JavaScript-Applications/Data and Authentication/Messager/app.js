function attachEvents() {
    let url = `http://localhost:3030/jsonstore/messenger`

    let sumbitButton = document.getElementById('submit')
    .addEventListener('click', postMessage)

    let refreshButton = document.getElementById('refresh')
    .addEventListener('click', refreshPage)

    let inputAuthor = document.querySelector('[name="author"]')
    let inputText = document.querySelector('[name="content"]')

    let resultTextArea = document.getElementById('messages')

    function postMessage(){
        let result = {
            author: inputAuthor.value.trim(),
            content: inputText.value.trim()
        }

        if (!inputAuthor.value || !inputText.value){
            return;
        }

        fetch(url, {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(result),
        })
        .then(result => {
            if (!result.ok) throw new Error ('Error')
            return result.json()
        }).catch(e => alert(e.message))
    }

    function refreshPage(){
        resultTextArea.value = ''
        fetch(url)
        .then(result => {
            if (!result.ok) throw new Error('Error')
            return result.json()
        }).then(data => {
            let allComments = []
            for (let [id, value] of Object.entries(data)){
                allComments.push(`${value.author}: ${value.content}`)
            }
            resultTextArea.value = allComments.join('\n')
        }).catch(e => alert(e.message))
    }
}
attachEvents();