function login(input){
    let username = input[0];
    let index = 1;
    let password = input[index]

    let counter = 0;

    let userLetters = username.split("")
    let usernameReversed = userLetters.reverse()
    let usernameJoined = usernameReversed.join("")

    while(password !== usernameJoined){
        let currentPass = String(input[index])
        if (currentPass !== usernameJoined){
            counter++
            if (counter >= 4){
                console.log(`User ${username} blocked!`)
                return;
            }
            console.log(`Incorrect password. Try again.`)
        }
        index++
        password = input[index]
    }
    if (password === usernameJoined){
        console.log(`User ${username} logged in.`)
    }
}