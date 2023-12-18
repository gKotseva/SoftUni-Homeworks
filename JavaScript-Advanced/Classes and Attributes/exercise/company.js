class Company {
    constructor() {
        this.deparments = {}
        this.averageSalary = {}
    }

    addEmployee(name, salary, position, deparment) {
        if ([...arguments].some(a => a === null || a === undefined || a === '' || salary < 0)){
            throw new Error ('Invalid input!')
        }

        let user = {
            name: name,
            salary: salary,
            position: position
        }

        if (!this.deparments.hasOwnProperty(deparment)){
            this.deparments[deparment] = []
            this.averageSalary[deparment] = {
                totalEmployees: 0,
                totalSalaries: 0,
                averageSalary: 0
            }
        }

        this.deparments[deparment].push(user)
        this.averageSalary[deparment].totalEmployees += 1
        this.averageSalary[deparment].totalSalaries += salary

        this.averageSalary[deparment].averageSalary = 
            this.averageSalary[deparment].totalSalaries /
            this.averageSalary[deparment].totalEmployees

        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment() {
        let result = ''
        let bestDepartment = Object
            .entries(this.averageSalary)
            .sort((a, b) => b[1].averageSalary - a[1].averageSalary)
            .shift()

        result += `Best Department is: ${bestDepartment[0]}`
        result += `\nAverage salary: ${bestDepartment[1].averageSalary.toFixed(2)}`

        this.deparments[bestDepartment[0]]
            .sort((a,b) => b.salary - a.salary || a.name.localeCompare(b.name))

        this.deparments[bestDepartment[0]].forEach(user => {
            result += `\n${user.name} ${user.salary} ${user.position}`
            
        });

        return result
    }
}