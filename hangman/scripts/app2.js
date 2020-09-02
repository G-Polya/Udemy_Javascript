const puzzleElement = document.querySelector('#puzzle')
const gueesesElement = document.querySelector('#guesses')
let game1 

// puzzleElement.textContent = game1.puzzle
// gueesesElement.textContent = game1.statusMessage


window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    //puzzleElement.textContent = game1.puzzle
    puzzleElement.innerHTML = ''
    gueesesElement.textContent = game1.statusMessage

    game1.puzzle.split('').forEach((letter) => {
        const letterElement = document.createElement('span')
        letterElement.textContent = letter
        puzzleElement.appendChild(letterElement)
    })

}

const startGame = async() => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

getPuzzle("2").then((data)=> {
    console.log(data.puzzle)
}).catch( (error) => {
    console.log(`Error: ${error}`)
})

getCountry('MX').then( (country) => {
    console.log(country.name)
}).catch((error) => {
    console.log(`Error: ${error}`)
})

getLocation().then((location)=> {
    return getCountry(location.country)
}).then((country) => {
    console.log(country.name)
}).catch((error) => {
    console.log(`Error: ${error}`)
})

getCurrentCountry().then((country)=>{
    console.log(country.name)
}).catch((error) => {
    console.log(`Error: ${error}`)
})