function formatGrade(grade){

    let result = '';

    if (grade < 3){
        result = 'Fail'
    } else if (grade < 3.50){
        result = 'Poor'
    } else if (grade < 4.50){
        result = 'Good'
    } else if (grade < 5.50){
        result = 'Very good'
    } else {
        result = 'Excellent'
    }

    if (result === 'Fail'){
        console.log(`${result} (2)`)
    } else {
        console.log(`${result} (${grade.toFixed(2)})`)
    }
}