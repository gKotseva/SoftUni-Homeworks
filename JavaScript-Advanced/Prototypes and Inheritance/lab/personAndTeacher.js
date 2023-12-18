function personAndTeacher(){
    class Person {
        constructor (name, email){
            this.name = name,
            this.email = email
        }
    }
    
    class Teacher extends Person {
        constructor(name, email, subject){
            super()
            this.name = name,
            this.email = email,
            this.subject = subject
        }
    }

    return {
        Person,
        Teacher
    }
}