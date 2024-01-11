function addItem() {
    let list = document.getElementById('items')
    let li = document.createElement('li')
    let input = document.getElementById('newItemText').value
    li.textContent = input
    list.appendChild(li)
}