// Prototype Inheritence
// myPerson -->Person.prototype --> Object.prototype --> null


class Person {
    constructor(firstName, lastName, age, likes=[]) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }

    getBio() {
        let bio = `${this.firstName} is ${this.age}.` 

        // We cannot access the instance properties if we want to access them in some of callback function
        // this.likes.forEach(function(like) {
        //     bio += ` ${this.firstName} likes ${like}.`    
        // })
    
        // We need to use an arrow function which doesn't bind this allowing us to successfully access them
        this.likes.forEach( (like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })
    
        return bio
    }

    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes){
        super(firstName,lastName,age,likes)
        this.position = position
    }
    getBio() {
        return `${this.fullName} is a ${this.position}`
    }

    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, likes, grade) {
        super(firstName, lastName, age,likes)
        this.grade = grade
    }

    getBio() {
        const status = this.grade >= 70 ? 'Pass' : 'Fail'
        return `${this.firstName} is a ${status} the class`
    }

    updateGrade(chnage) {
        this.grade += chnage
    }
}



const myStudent = new Employee('Kim', "hee su", 23, ['Game'], position='Teacher')
myStudent.fullName = 'Clancey Turner'
console.log(myStudent.getBio())
