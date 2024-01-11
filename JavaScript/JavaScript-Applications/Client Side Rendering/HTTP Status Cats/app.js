import {cats} from './catSeeder.js'
import {html, render} from './node_modules/lit-html/lit-html.js'

let cardTemplate = (data) => html`
    <li>
        <img src="./images/${data.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn" @click=${onClick}>Show status code</button>
            <div class="status" style="display: none" id="${data.id}">
                <h4>Status Code: ${data.statusCode}</h4>
                <p>${data.statusMessage}</p>
            </div>
        </div>
    </li>
`

let catsTemplate = cats.map(cardTemplate)

let section = document.getElementById('allCats')
render(html`<ul>${catsTemplate}</ul>`, section)

function onClick(event){
    let cat = event.target.parentNode
    let result = cat.querySelector('.status').style.display

    if(result === 'block'){
        cat.querySelector('.showBtn').textContent = 'Show status code'
        cat.querySelector('.status').style.display = 'none'
    } else {
        cat.querySelector('.showBtn').textContent = 'Hide status code'
        cat.querySelector('.status').style.display = 'block'
    }
}