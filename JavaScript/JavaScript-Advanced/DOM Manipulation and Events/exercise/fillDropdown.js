function addItem() {
    let inputText = document.getElementById('newItemText')
    let inputValue = document.getElementById('newItemValue')

    let menu = document.getElementById('menu')
    let newElement = document.createElement('option')
    newElement.textContent = inputText.value
    newElement.value = inputValue.value
    menu.appendChild(newElement)

    inputText.value = ''
    inputValue.value = ''
}