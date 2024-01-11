import {register} from '../api/user.js'

let section = document.getElementById('register')
let form = document.querySelector('form')
form.addEventListener('submit', onSubmit)

let ctx = null

export function showRegister(context){
    ctx = context
    context.showSection(section)
}

async function onSubmit(event){
    event.preventDefault()

    let formData = new FormData(form)
    let errors = []

    let {email, password, repeatPassword} = Object.fromEntries(formData)

    if(email.length < 3){
        alert('Email is too short.')
        errors.push('email')
    }

    if(password.length < 3){
        alert('Password is to short.')
        errors.push('pass')
    }

    if(password !== repeatPassword){
        alert('Passwords do not match!')
        errors.push('repeatPass')
    } else if (errors.length <= 0) {
        await register(email, password)
        alert('Registration successful!')
        form.reset()
        ctx.updateNavBar()
        ctx.goTo('/')
    }

}