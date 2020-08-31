// Prototype Inheritence



class PersonClass {
    constructor(firstName, lastName, age, likes = []) {
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
}

const myPerson = new PersonClass('Andrew', 'Mead', 27, ['Teaching'])
console.log(myPerson.getBio())

const Person = function(firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}


Person.prototype.getBio = function() {
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

Person.prototype.setName = function(fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

const me = new Person('Andrew', 'Mead', 27, ['Teaching', 'Biking'])
me.setName('Alexis Turner')

me.getBio = function() {
    return 'This is fake!'
}

console.log(me.getBio())

const person2 = new Person('Clancey', 'Turner', 51)

Person.prototype.getBio = function() {
    return 'Testing Testing'
}
console.log(person2.getBio())
