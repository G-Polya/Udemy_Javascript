const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then( (response) => {
        if(response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch puzzle')
        }
    })
}

const getCountry = (countryCode) => {
    return fetch('http://restcountries.eu/rest/v2/all').then( (response) => {
        if(response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch data')
        }
    }).then((data) => data.find((country) => country.alpha2Code === countryCode))
}

const getLocation = () => {
    return fetch('http://ipinfo.io/json?token=8dcd74f97eb55d').then( (response) => {
        if(response.status === 200) {
             return response.json()
        } else {
            throw new Error('Unable to fetch location')
        }
    })
}


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


