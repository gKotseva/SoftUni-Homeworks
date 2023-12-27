import * as api from './api.js'

let navigation = {
    'register': 'users/register',
    'user': 'users/login',
    'logout': 'users/logout',
}

export async function register(email, password){
    let user = await api.post(navigation.register, {email, password})
    sessionStorage.setItem('user', JSON.stringify(user))
}

export async function login(email, password){
    let user = await api.post(navigation.user, {email, password})
    sessionStorage.setItem('user', JSON.stringify(user))
}

export async function logout(){
    api.get(navigation.logout)
    sessionStorage.removeItem('user')
}