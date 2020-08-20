// Multiple arguments
let add = function(a, b)
{
    return a + b
}

let result = add(10, 1)
console.log(result)

// Default arguments
let getScoreText = function(name='Kim', score=100)
{
    return `Name: ${name} - Score: ${score}`
    // return 'Name: '+ name +', Score: ' +score
}

let scoreText = getScoreText(undefined,20)
console.log(scoreText)

// Challenge Area
let getTip = function(total, tipPercent=0.2)
{
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tip}`
}

let tip = getTip(40, 0.25)
console.log(tip)

let name = 'Vikrm'
let age = 12
console.log(`Hey, my name is ${name}! I am ${age} years old.`)