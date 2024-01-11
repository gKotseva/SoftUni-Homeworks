function sumTable() {
    let table = document.querySelectorAll('table>tbody>tr>td')

    let sum = 0

    for (let i = 1; i < table.length; i+=2){
        let price = Number(table[i].textContent)
        sum += price
    }

    document.getElementById('sum').textContent = sum
}