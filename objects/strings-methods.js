let name = '        Andrew Mead'

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Include method
let password = 'abc123password098'
console.log(password.includes('password'))

// Trim
console.log(name.trim())

// Challenge Area

let isValidPassword = function(password) 
{
    return password.length > 8 && !password.includes('password')
    // if(password.length > 8 && !password.includes('password'))
    // {
    //     return true
    // }
    // else
    // {
    //     return false
    // }
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!@#$%^&'))
console.log(isValidPassword('asdasrwpassword'))