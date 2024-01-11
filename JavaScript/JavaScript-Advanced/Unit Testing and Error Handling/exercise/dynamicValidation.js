function validate() {
    let inputEmail = document.getElementById('email')

    inputEmail.addEventListener('change', validateEmail)

    function validateEmail(event){
        let emailRegex = /^[a-z]+\@[a-z]+.[a-z]{3}$/g

        if (inputEmail.value.match(emailRegex)){
            event.target.classList.remove('error')
        } else {
            event.target.classList.add('error')
        }
    }

}