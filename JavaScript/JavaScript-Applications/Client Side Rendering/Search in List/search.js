import {towns} from './towns.js'
import {html, render} from './node_modules/lit-html/lit-html.js'

let cardTemplate = towns.map(town => html`<li>${town}</li>`)

let div = document.getElementById('towns')

render(html`<ul>${cardTemplate}</ul>`, div)

let button = document.querySelector('button').addEventListener('click', search)

function search() {
   let input = document.getElementById('searchText').value
   let table = document.querySelectorAll('#towns>ul>li')
   let matches = 0

   for (let current of table){
      if(current.textContent.includes(input)){
         matches++
         current.classList.add('active')
      } else {
         current.classList.remove('active')
      }
   }

   return document.getElementById('result').textContent = `${matches} matches found`
}
