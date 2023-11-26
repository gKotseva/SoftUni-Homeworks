function schoolGrades(students) {
    let studentList = students.reduce((acc, curr, index) => {
        let [name, ...grades] = curr.split(' ');
        grades = grades.map((g) => Number(g));
        let currentStudent = acc.find((s) => s.name === name);

        if (currentStudent) {
            currentStudent.grades.push(...grades);
        } else {
            currentStudent = {
                name,
                grades,
                average: 0,
            };

            acc.push(currentStudent);
        }

        const totalGrades = currentStudent.grades.reduce((acc, curr) => {
            acc += curr;
            return acc;
        }, 0);

        currentStudent.average = (totalGrades / currentStudent.grades.length).toFixed(2);

        return acc;
    }, []);

    studentList = studentList.sort((a, b) => a.name.localeCompare(b.name));
    studentList.forEach((stu) => console.log(`${stu.name}: ${stu.average}`));
}