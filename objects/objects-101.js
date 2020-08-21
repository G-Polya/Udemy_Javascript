let myBook = 
{
    title : '1984',
    author : 'George Orwell',
    pageCount : 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

// Challenge Area

let myInfo =
{
    name : 'Kim',
    age : 25,
    location : 'Seoul'
}

console.log(`${myInfo.name} is ${myInfo.age} and lives in ${myInfo.location}`)
myInfo.age = 99
console.log(`${myInfo.name} is ${myInfo.age} and lives in ${myInfo.location}`)
