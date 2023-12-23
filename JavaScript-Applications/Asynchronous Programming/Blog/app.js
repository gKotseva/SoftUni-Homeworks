function attachEvents() {
    let loadPostsButton = document.getElementById('btnLoadPosts')
    loadPostsButton.addEventListener('click', loadPosts)

    let viewPostButton = document.getElementById('btnViewPost')
    viewPostButton.addEventListener('click', viewPosts)
}


async function loadPosts(){
    let postsUrl = `http://localhost:3030/jsonstore/blog/posts`
    await fetch(postsUrl)
    .then(response => response.json())
    .then(data => {
        Object.values(data).forEach(element => {
            let title = element.title
            let body = element.body
            let id = element.id

            let option = document.createElement('option')
            option.value = id
            option.textContent = title
            document.getElementById('posts').appendChild(option)
        });
    })
}



async function viewPosts(e){
    let commentsUrl = `http://localhost:3030/jsonstore/blog/comments`
    let title = ''
    let id = 0

    document.querySelectorAll('option').forEach(element => {
        if (element.selected){
            title = element.textContent
            id = element.value
        }
    });

    await fetch(commentsUrl)
    .then(response => {
        if (!response.ok){
            throw new Error
        }
        return response.json()
    })
    .then(data => {
        document.getElementById('post-comments').innerHTML = ''
        Object.values(data).forEach(p => {
            if (id === p.postId){
                let li = document.createElement('li')
                li.textContent = p.text
                document.getElementById('post-comments').appendChild(li)
            }
        })
        document.getElementById('post-title').textContent = title
    })

}

attachEvents();