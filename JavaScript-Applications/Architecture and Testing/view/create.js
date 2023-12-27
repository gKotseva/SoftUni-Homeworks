import {createIdea} from '../api/data.js'

let section = document.getElementById('create')
let form = section.querySelector('form')
form.addEventListener('submit', onSubmit)

let ctx = null

export function showCreate(context){
    ctx = context
    context.showSection(section)
}

async function onSubmit(event){
    event.preventDefault()

    let formData = new FormData(form)

    let title = formData.get('title')
    let description = formData.get('description')
    let imgURL = formData.get('imageURL')

    if (title.length < 6){
        alert('Title is too short.')
    }

    if(description.length < 10){
        alert('Description is too short.')
    }

    if(imgURL.length < 5){
        alert('Img URL is too short.')
    }

    await createIdea({title, description, img:imgURL})
    form.reset()
    ctx.goTo('/catalog')
    
}