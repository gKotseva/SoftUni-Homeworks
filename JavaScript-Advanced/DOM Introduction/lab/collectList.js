function extractText() {
    let list = document.querySelectorAll('#items>li')

    for (let current of list){
        console.log(current.textContent)
        document.getElementById('result').textContent += `${current.textContent}\n`
    }
}