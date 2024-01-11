function attachEvents() {

    let loadButton = document.getElementById('btnLoad')
    .addEventListener('click', loadContacts)

    let createButton = document.getElementById('btnCreate')
    .addEventListener('click', createContact)

}

attachEvents();

async function createContact(){
    let inputPerson = document.getElementById('person')
    let inputPhoneNumber = document.getElementById('phone')
    let url = `http://localhost:3030/jsonstore/phonebook`
    if (!inputPerson.value || !inputPhoneNumber.value){
        return;
    }

    let result = {
        person: inputPerson.value,
        phone: inputPhoneNumber.value
    }

    await fetch(url, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(result),
    })
    loadContacts()
}

async function onDelete(e){
    let url = `http://localhost:3030/jsonstore/phonebook/${e.target.id}`
    if (e.target.textContent !== 'Delete'){
        return;
    }

    await fetch(url, {
        method: 'DELETE'
    })
    loadContacts()
}

async function loadContacts(){
    let url = `http://localhost:3030/jsonstore/phonebook`
    let phoneBook = document.getElementById('phonebook')
    phoneBook.innerHTML = ''
    let response = await fetch(url)
    let data = await response.json()

        Object.values(data).forEach(e => {
            let li = document.createElement('li')
            let deleteButton = document.createElement('button')
            deleteButton.addEventListener('click', onDelete)
            deleteButton.setAttribute('id', e._id)
            deleteButton.textContent = 'Delete'

            li.textContent = `${e.person}: ${e.phone}`
            li.appendChild(deleteButton)
            phoneBook.appendChild(li)
        })
}