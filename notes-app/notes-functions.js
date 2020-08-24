// Read existing notes from localStorage
const getSavedNotes = function() {
    const notesJSON = localStorage.getItem('notes')
    if(notesJSON !== null) {
       return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// Generate the DOM structure for a note
const generateNoteDom = function(note) {
    const noteElement = document.createElement('p')

    if(note.title.length > 0) {
        noteElement.textContent = note.title
    }else{
        noteElement.textContent='Unnamed note'
    }

    return noteElement
}

// Save the notes to localStorage
const saveNotes = function(notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}



// Render application notes
const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = '<p>Test</p>'
    
    filteredNotes.forEach(function(note) {
        const noteElement = generateNoteDom(note)
        
        document.querySelector('#notes').appendChild(noteElement)
    })
}