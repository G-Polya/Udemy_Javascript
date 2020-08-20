// Function : input(argument), code, output(return value)

let greetUser = function()
{
    console.log('Welcome user!')
}

greetUser()

let square = function(num)
{
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

// Challenge Area
let converFahreheitToCelsius = function(fahrenheit)
{
    let celsius = (fahrenheit - 32) * 5/9 
    return celsius
}

console.log(converFahreheitToCelsius(32))
console.log(converFahreheitToCelsius(68))