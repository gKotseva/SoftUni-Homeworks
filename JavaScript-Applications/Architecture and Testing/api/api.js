let host = 'http://localhost:3030/'

async function request(method, url, data){
    let user = JSON.parse(sessionStorage.getItem('user'))

    let options = {
        method: method,
        headers: {},
    }

    if(data){
        options.headers['Content-Type'] = 'application/json'
        options.body = JSON.stringify(data)
    }

    if(user){
        let token = user.accessToken
        options.headers['X-Authorization'] = token
    }

    try {
        let res = await fetch(`${host}${url}`, options)
        if(!res.ok) {
            if (res.status === 403){
                sessionStorage.removeItem('user')
                throw new Error('Access denied!')
            }
            let err = await res.json()
            throw new Error(err.message)
        }
        return res.status === 204 ? res : res.json()
    } catch(error){
        alert(error.message)
        throw error
    }
}

let get = request.bind(null, 'GET')
let post = request.bind(null, 'POST')
let put = request.bind(null, 'PUT')
let del = request.bind(null, 'DELETE')

export { get, post, put, del }