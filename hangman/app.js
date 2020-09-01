const puzzleElement = document.querySelector('#puzzle')
const gueesesElement = document.querySelector('#guesses')
const game1 = new Hangman('Cat', 2)

puzzleElement.textContent = game1.puzzle
gueesesElement.textContent = game1.statusMessage


window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleElement.textContent = game1.puzzle
    gueesesElement.textContent = game1.statusMessage
})


const request = new XMLHttpRequest()
request.addEventListener('readystatechange', (e) => {
    if(e.target.readyState === 4 && e.target.status === 200) {
        
        const data = JSON.parse(e.target.responseText)
        console.log(data)
    } else if(e.target.readyState === 4) {
        console.log('And error has taken place')
    }
})


request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=2')
request.send()



getCountry("US").then((country) => {
    console.log(country.name)
}, (err) => {
    console.log(`Error: ${err}`)
})
