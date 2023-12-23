async function lockedProfile() {
    let url = `http://localhost:3030/jsonstore/advanced/profiles`

    let mainElement = document.getElementById('main');
    let inputElements = document.querySelectorAll('input');
    let profileElement = document.querySelector('.profile');
    let hiddentElement = document.querySelector('.user1Username');
    mainElement.innerHTML = ''
    hiddentElement.style.display = 'none'


    let result = await fetch(url)
    let data = await result.json()
    let [locked, unlocked, inputUser, inputEmail, inputAge] = Array.from(inputElements)
    for (let current of Object.values(data)){
        let username = current.username
        let email = current.email
        let age = current.age

        inputUser.value = username
        inputEmail.value = email
        inputAge.value = age
        locked.checked = true

        let currentDiv = profileElement.cloneNode(true)
        currentDiv.addEventListener('click', showMore)
        mainElement.appendChild(currentDiv)
    }

        function showMore(e) {
            if (e.target.tagName === 'BUTTON' && !e.target.parentElement.children[2].checked) {
                const hiddentElement = e.target.parentElement.children[9];
        
                if (hiddentElement.style.display === 'block') {
                    hiddentElement.style.display = 'none';
                    e.target.innerText = 'Show more';
                } else {
                    hiddentElement.style.display = 'block';
                    e.target.innerText = 'Hide it';
                }
            }
        }
    }
