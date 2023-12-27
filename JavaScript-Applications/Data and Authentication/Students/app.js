
async function loadStudents(){
    let url = `http://localhost:3030/jsonstore/collections/students`
    let table = document.querySelector('#results tbody')

    table.innerHTML = ''

    let submitButton = document.getElementById('submit').addEventListener('click', enterStudents)

    let response = await fetch(url)
    let data = await response.json()

    Object.values(data).forEach(element => {
        let tr = document.createElement('tr')

        let tdFirstName = document.createElement('td')
        tdFirstName.textContent = element.firstName
        tr.appendChild(tdFirstName)

        let tdLastName = document.createElement('td')
        tdLastName.textContent = element.lastName
        tr.appendChild(tdLastName)

        let tdFacultyNumber = document.createElement('td')
        tdFacultyNumber.textContent = element.facultyNumber
        tr.appendChild(tdFacultyNumber)

        let tdGrade = document.createElement('td')
        tdGrade.textContent = element.grade
        tr.appendChild(tdGrade)


        table.appendChild(tr)
    });
}
loadStudents()

async function enterStudents(e){
    e.preventDefault()
    let inputFirstName = document.querySelector('[name="firstName"]')
    let inputLastName = document.querySelector('[name="lastName"]')
    let inputFacultyNumber = document.querySelector('[name="facultyNumber"]')
    let inputGrade = document.querySelector('[name="grade"]')

    if (!inputFirstName.value || !inputLastName.value || !inputFacultyNumber.value || !inputGrade.value){
        alert('All fields are required!')
        return;
    }

    let url = `http://localhost:3030/jsonstore/collections/students`

    let object = {
        firstName: inputFirstName.value,
        lastName: inputLastName.value,
        facultyNumber: inputFacultyNumber.value,
        grade: inputGrade.value
    }

    await fetch(url, {
        method: 'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(object)
    })
    loadStudents()
}
