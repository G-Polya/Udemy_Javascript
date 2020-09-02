const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    
    if(response.status === 200) {
        const data = await response.json()
        return data
    } else {
        throw new Error('Unable to get puzzle')
    }
}

const getCountry = async (countryCode) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all')

    if(response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to fetch data')
    }
}

const getLocation = async () => {
    const response = await fetch('http://ipinfo.io/json?token=8dcd74f97eb55d')

    if(response.status === 200) {
        const data = await response.json()
        return data
    } else {
        throw new Error('Unable to fetch data')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    return await getCountry(location.country)
}

// const getLocation = () => {
//     return fetch('http://ipinfo.io/json?token=8dcd74f97eb55d').then( (response) => {
//         if(response.status === 200) {
//              return response.json()
//         } else {
//             throw new Error('Unable to fetch location')
//         }
//     })
// }


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


