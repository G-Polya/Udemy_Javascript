const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then( (response) => {
        if(response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch puzzle')
        }

    })
}

const getCountry = (countryCode) => new Promise( (resolve, reject) =>{
    const countryRequest = new XMLHttpRequest()
    
    countryRequest.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((country) => country.alpha2Code === countryCode)
            resolve(country)
            
        } else if (e.target.readyState === 4) {
            reject('Unable to fetch data')
            console.log('Unable to fetch data')
        }
    })

    countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
    countryRequest.send()
})


// const getPuzzleSync = () => {
//     const request = new XMLHttpRequest()
    
//     request.open('GET', 'http://puzzle.mead.io/slow-puzzle?wordCount=2', false)
//     request.send()

    
//     if(request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText)
//         return data.puzzle
//     } else if(request.readyState === 4) {
//         throw new Error('Things did not go well')
//     }
// }


