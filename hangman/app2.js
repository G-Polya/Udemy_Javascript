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

getPuzzle("2").then((data)=> {
    console.log(data.puzzle)
}).catch( (error) => {
    console.log(`Error: ${error}`)
})

// getCountry('MX').then( (country)=>{
//     console.log(country.name)
// }, (err) =>{
//     console.log(`Error: ${err}`)
// })

// fetch('http://puzzle.mead.io/puzzle', {}).then( (response) => {
//     if(response.status === 200) {
//         return response.json()
//     } else {
//         throw new Error('Unable to fetch the puzzle')
//     }
// }).then((data) => {
//     console.log(data.puzzle)
// }).catch( (error) => {
//     console.log(error)
// })