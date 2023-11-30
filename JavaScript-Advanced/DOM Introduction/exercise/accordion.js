function toggle() {

    let currentButton = document.getElementsByClassName('button')[0].textContent

    if (currentButton === 'More'){
        document.getElementsByClassName('button')[0].textContent = 'Less'
        let text = document.getElementById('extra').textContent
        document.getElementById('extra').style.display = 'block'

        console.log(text)
    } else {
        document.getElementsByClassName('button')[0].textContent = 'More'
        document.getElementById('extra').style.display = 'none'
    }
}