function toStringExtension(){
    class Person {
        constructor (name, email){
            this.name = name,
            this.email = email
        }
        toString() {
            let className = this.constructor.name
            return `${className} (name: ${this.name}, email: ${this.email})`
        }
    }
    
    class Teacher extends Person {
        constructor(name, email, subject){
            super()
            this.name = name,
            this.email = email,
            this.subject = subject
        }
        toString() {
            let base = super.toString().slice(0, -1);
            return `${base}, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course){
            super()
            this.name = name,
            this.email = email,
            this.course = course
        }

        toString() {
            let base = super.toString().slice(0, -1);
            return `${base}, course: ${this.course})`;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }

}