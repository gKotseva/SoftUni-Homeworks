function focused() {
    let input = document.getElementsByTagName('input')

    for (let current of input){
        current.addEventListener('focus', focusInput)
        current.addEventListener('blur', blurInput)
    }

    function focusInput(event){
        event.target.parentElement.classList.add('focused')
    }

    function blurInput(event){
        event.target.parentElement.classList.remove('focused')
    }
}