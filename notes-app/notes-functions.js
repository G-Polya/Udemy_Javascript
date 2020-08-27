
// Read existing notes from localStorage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')
    return notesJSON !== null ? JSON.parse(notesJSON) : []
}

// Remove a note from the list
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id )

    if(noteIndex > -1) {
        notes.splice(noteIndex,1)
    }
}

// Generate the DOM structure for a note
const generateNoteDom = (note) => {
    const noteElement = document.createElement('div')
    const textElement = document.createElement('a')
    const button = document.createElement('button')

    // Setup the remove note button
    button.textContent = 'x'
    noteElement.appendChild(button)
    button.addEventListener('click', () => {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes,filters)
    })

    // Setup the note title text
    if(note.title.length > 0) {
        textElement.textContent = note.title
    }else{
        textElement.textContent='Unnamed note'
    }
    textElement.setAttribute('href',`/edit.html#${note.id}`)
    noteElement.appendChild(textElement)

    return noteElement
}

// Save the notes to localStorage
const saveNotes = function(notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Sort your notes by one of three ways
const sortNotes = (notes, sortBy) => {
    if(sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if(a.updatedAt > b.updatedAt) {
                return -1
            } else if(a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if(sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if(a.createdAt > b.createdAt) {
                return -1
            } else if(a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    }
    else if(sortBy === 'alphabetical'){
        return notes.sort((a, b) => {
            if(a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if(a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes
    }
}

// Render application notes
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    document.querySelector('#notes').innerHTML = '<p>Test</p>'
    
    filteredNotes.forEach((note) => {
        const noteElement = generateNoteDom(note)
        
        document.querySelector('#notes').appendChild(noteElement)
    })
}

// Generate the last edited message
const generateLastEdited = (timeStamp) => {
    return `Last edited ${moment(timeStamp.updatedAt).fromNow()}`
}