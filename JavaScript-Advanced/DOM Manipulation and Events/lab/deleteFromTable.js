function deleteByEmail() {
    let list = document.querySelectorAll('#customers tr td:nth-child(2)')
    let input = document.querySelector('input').value

    let match = 0;
    
    for (let current of list){
        if (current.textContent.includes(input)){
            match++
            let row = current.parentNode
            row.parentNode.removeChild(row)
            document.getElementById('result').textContent = `Deleted.`
        }
    }

    if (match == 0){
        document.getElementById('result').textContent = `Not found.`
    }
}