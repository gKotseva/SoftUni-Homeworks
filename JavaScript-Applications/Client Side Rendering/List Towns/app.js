import { html, render } from "./node_modules/lit-html/lit-html.js"

document.getElementById('btnLoadTowns').addEventListener('click', (event) => {
    event.preventDefault()
    
    let inputTowns = document.getElementById('towns').value
    let towns = inputTowns.split(', ')

    let townTemplate = html`<ul>${towns.map(town => html`<li>${town}</li>`)}</ul>`

    let root = document.getElementById('root')
    render(townTemplate, root)
})

