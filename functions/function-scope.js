// Global Scope (convertFahreheitToCelsius, tempOne, tempTwo)
    // Local Scope (fahrenheit, celsius)
        // Local Scope (isFreezing)
let converFahreheitToCelsius = function(fahrenheit)
{
    let celsius = (fahrenheit - 32) * 5/9 

    if(celsius <= 0)
    {
        let isFreezing = true
    }
    return celsius
}

tempOne = converFahreheitToCelsius(32)
tempTwo = converFahreheitToCelsius(68)



console.log(tempOne)
console.log(tempTwo)