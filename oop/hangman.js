const Hangman = function(word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.guess = remainingGuesses
    this.guessedLetters = ['c', 'e', '']
}

Hangman.prototype.getPuzzle = function() {
    
    if(this.word.length !== this.guessedLetters.length) {
        console.log('Length differ')
    }

    let puzzle = ''


    this.word.forEach( (letter) => {
        if(this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
        
    })

    return puzzle
}

const game1 = new Hangman('Cat', 'acd')
console.log(game1.getPuzzle())



