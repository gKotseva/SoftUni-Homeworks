import {html, render} from './node_modules/lit-html/lit-html.js'

let url = 'http://localhost:3030/jsonstore/advanced/dropdown'

let data = null

async function loadAllItems(){
    let response = await fetch(url)
    let data = await response.json()
    return data
}

let items = Object.values(await loadAllItems())
let cardTemplate = items.map(e => html`<option value="${e._id}">${e.text}</option>`)


let final = document.getElementById('menu')

render(cardTemplate, final)

let form = document.querySelector('form').addEventListener('submit', addItem)

async function addItem(e) {
    let text = document.getElementById('itemText').value

    await fetch(url, {
        method: 'POST',
        headers: {'Content-type': 'application-json'},
        body: JSON.stringify({ text: text })
    })
    .then(res => {
        if (!res.ok){
            throw new Error('Something went wrong!')
        }

        loadAllItems()
    })
    .catch(e => alert(e))
}