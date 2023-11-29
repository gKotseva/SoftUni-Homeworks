function TicTacToe(input) {

    let startDashboard = [[false, false, false],
    [false, false, false],
    [false, false, false]]

    let counter = 0;

    for (let i = 0; i < input.length; i++) {
        let [row, position] = input[i].split(' ').map(Number)

        if (startDashboard[row][position] === false) {
            if (counter % 2 === 0) {
                startDashboard[row][position] = 'X'
            } else {
                startDashboard[row][position] = 'O'
            }
            counter++
        } else {
            console.log(`This place is already taken. Please choose another!`)
        }

        // console.table(startDashboard)

        if (!startDashboard[0].includes(false) && !startDashboard[1].includes(false) && !startDashboard[2].includes(false)) {
            console.log(`The game ended! Nobody wins :(`)
            console.log(startDashboard[0].join('\t'))
            console.log(startDashboard[1].join('\t'))
            console.log(startDashboard[2].join('\t'))
            return
        }

        if (startDashboard[0][0] === 'X' && startDashboard[0][1] === 'X' && startDashboard[0][2] === 'X' || startDashboard[0][0] === 'O' && startDashboard[0][1] === 'O' && startDashboard[0][2] === 'O') {
            console.log(`Player ${startDashboard[0][0]} wins!`)
            console.log(startDashboard[0].join('\t'))
            console.log(startDashboard[1].join('\t'))
            console.log(startDashboard[2].join('\t'))
            return

        } else if (startDashboard[1][0] === 'X' && startDashboard[1][1] === 'X' && startDashboard[1][2] === 'X' || startDashboard[1][0] === 'O' && startDashboard[1][1] === 'O' && startDashboard[1][2] === 'O') {
            console.log(`Player ${startDashboard[1][0]} wins!`)
            console.log(startDashboard[0].join('\t'))
            console.log(startDashboard[1].join('\t'))
            console.log(startDashboard[2].join('\t'))
            return

        } else if (startDashboard[2][0] === 'X' && startDashboard[2][1] === 'X' && startDashboard[2][2] === 'X' || startDashboard[2][0] === 'O' && startDashboard[2][1] === 'O' && startDashboard[2][2] === 'O') {
            console.log(`Player ${startDashboard[2][0]} wins!`)
            console.log(startDashboard[0].join('\t'))
            console.log(startDashboard[1].join('\t'))
            console.log(startDashboard[2].join('\t'))
            return

        } else if (startDashboard[0][0] === 'X' && startDashboard[1][0] === 'X' && startDashboard[2][0] === 'X' || startDashboard[0][0] === 'O' && startDashboard[1][0] === 'O' && startDashboard[2][0] === 'O') {
            console.log(`Player ${startDashboard[0][0]} wins!`)
            console.log(startDashboard[0].join('\t'))
            console.log(startDashboard[1].join('\t'))
            console.log(startDashboard[2].join('\t'))
            return

        } else if (startDashboard[0][1] === 'X' && startDashboard[1][1] === 'X' && startDashboard[2][1] === 'X' || startDashboard[0][1] === 'O' && startDashboard[1][1] === 'O' && startDashboard[2][1] === 'O') {
            console.log(`Player ${startDashboard[0][1]} wins!`)
            console.log(startDashboard[0].join('\t'))
            console.log(startDashboard[1].join('\t'))
            console.log(startDashboard[2].join('\t'))
            return

        } else if (startDashboard[0][2] === 'X' && startDashboard[1][2] === 'X' && startDashboard[2][2] === 'X' || startDashboard[0][2] === 'O' && startDashboard[1][2] === 'O' && startDashboard[2][2] === 'O') {
            console.log(`Player ${startDashboard[0][2]} wins!`)
            console.log(startDashboard[0].join('\t'))
            console.log(startDashboard[1].join('\t'))
            console.log(startDashboard[2].join('\t'))
            return

        } else if (startDashboard[0][0] === 'X' && startDashboard[1][1] === 'X' && startDashboard[2][2] === 'X' || startDashboard[0][0] === 'O' && startDashboard[1][1] === 'O' && startDashboard[2][2] === 'O') {
            console.log(`Player ${startDashboard[0][0]} wins!`)
            console.log(startDashboard[0].join('\t'))
            console.log(startDashboard[1].join('\t'))
            console.log(startDashboard[2].join('\t'))
            return

        } else if (startDashboard[0][2] === 'X' && startDashboard[1][1] === 'X' && startDashboard[2][0] === 'X' || startDashboard[0][2] === 'O' && startDashboard[1][1] === 'O' && startDashboard[2][0] === 'O') {
            console.log(`Player ${startDashboard[0][2]} wins!`)
            console.log(startDashboard[0].join('\t'))
            console.log(startDashboard[1].join('\t'))
            console.log(startDashboard[2].join('\t'))
            return
        }
    }
    
}