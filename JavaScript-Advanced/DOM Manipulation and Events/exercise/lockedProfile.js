function lockedProfile() {
    let showMoreButton = document.querySelectorAll('button')

    for (let currentButton of showMoreButton){
        currentButton.addEventListener('click', onClick)
    }

    function onClick (event){
        let lockOrUnlock = Array.from(event.target.parentElement.children)
        let lockOrUnlock2 = lockOrUnlock[2].checked

        if (lockOrUnlock2){
            return;
        } 

        let hiddenFieldsElement = event.target.previousElementSibling

        if (event.target.textContent === 'Show more'){
            hiddenFieldsElement.style.display = 'block'
            event.target.textContent = 'Hide it'
            return;
        } 

        hiddenFieldsElement.style.display = ""
        event.target.textContent = 'Show more'

    }
 
}