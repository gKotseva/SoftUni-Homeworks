import {html, render} from './node_modules/lit-html/lit-html.js'

// let data = null

async function loadAllItems(){
   let response = await fetch('http://localhost:3030/jsonstore/advanced/table')
   let data = await response.json()

   return data
}

let items = Object.values(await loadAllItems())
let cardTemplate = html`${items.map(e => html`<tr><td>${e.firstName}</td><td>${e.lastName}</td><td>${e.course}</td></tr>`)}`

let tbody = document.querySelector('tbody')
render(cardTemplate, tbody)

solve()

function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let names = document.querySelectorAll('tbody tr')
      let input = document.getElementById('searchField').value

      let inputToLowerCase = input.toLowerCase()

      for(let current of names){
         let textToLower = current.textContent.toLowerCase()

         if(textToLower.includes(inputToLowerCase)){
            current.setAttribute('class', 'select')
         } else {
            current.removeAttribute('class', 'select')
         }
      }

   }
}