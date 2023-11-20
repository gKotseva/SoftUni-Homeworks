function passwordValidator(pass){

    let length = passwordLengthChecker()
    let specialChars = noSpecialChars();
    let twoDigits = atleast2Digits()

    function passwordLengthChecker(checkLength){
        let passwordLength = pass.length

        if (passwordLength <= 10 && passwordLength >= 6){
            return true;
        }

    }
    passwordLengthChecker(pass)

    function noSpecialChars(){

        for (let i = 0; i < pass.length; i++){
            let charOrLetter = pass[i].charCodeAt(0)

            let numberCheck = numberChecker(charOrLetter)
            let upperCaseCheck = upperCase(charOrLetter)
            let lowerCaseCheck = lowerCase(charOrLetter)

            if (!numberCheck && !upperCaseCheck && !lowerCaseCheck){
                return false;
            }
        }
        return true;
    }
    noSpecialChars(pass)

    function numberChecker(charOrLetter){
        if (charOrLetter > 47 && charOrLetter < 58){
            return true;
        } else {
            return false;
        }
    }

    function upperCase(charOrLetter){
        if (charOrLetter > 64 && charOrLetter < 91){
            return true;
        } else {
            return false;
        }
    }

    function lowerCase(charOrLetter){
        if (charOrLetter > 96 && charOrLetter < 123){
            return true;
        } else {
            return false;
        }
    }

    function atleast2Digits(){
        let counter = 0

        for (let i = 0; i < pass.length; i++){
            let digitCheck = pass[i].charCodeAt(0)
            if (digitCheck > 47 && digitCheck < 58){
                counter++
            }
        }

        if (counter >= 2){
            return true;
        } else {
            return false;
        }

    }
    atleast2Digits(pass)

    if (length && specialChars && twoDigits){
        console.log(`Password is valid`)
    }

    if (!length){
        console.log(`Password must be between 6 and 10 characters`)
    }

    if (!specialChars){
        console.log(`Password must consist only of letters and digits`)
    }

    if (!twoDigits){
        console.log(`Password must have at least 2 digits`)
    }

}