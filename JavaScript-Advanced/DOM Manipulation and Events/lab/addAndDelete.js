function addItem() {
    let list = document.getElementById('items')
    let li = document.createElement('li')
    let input = document.getElementById('newItemText').value
    li.textContent = input
    list.appendChild(li)

    let deleteButton = document.createElement('a')
    deleteButton.innerHTML = '<a href="#">[Delete]</a>'
    li.appendChild(deleteButton)
    deleteButton.addEventListener('click', deleteHandler) 

    function deleteHandler(){
        li.remove()
    }

}