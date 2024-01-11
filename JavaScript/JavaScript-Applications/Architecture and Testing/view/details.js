import {ideaByID, deleteByIdea} from '../api/data.js'

let section = document.getElementById('details')

export async function showDetails(context, id){
    let idea = await ideaByID(id)
    context.showSection(section)
    let user = JSON.parse(sessionStorage.getItem('user'))
    let isOwner = user && user._id === idea._ownerId

    section.innerHTML = createIdea(idea, isOwner)
    if(isOwner){
        section.querySelector('a').addEventListener('click', async (e) => {
            e.preventDefault()
            await deleteByIdea(id)
            context.goTo('/catalog')
        })
    }
}

function createIdea(idea, isOwner){
    let html = `<img class="det-img" src="${idea.img}" />
    <div class="desc">
        <h2 class="display-5">${idea.title}</h2>
        <p class="infoType">Description:</p>
        <p class="idea-description">${idea.description}</p>
    </div>`
    
    if(isOwner){
        html += `
        <div class="text-center">
            <a class="btn detb" href="">Delete</a>
        </div>`
    }
    return html
}