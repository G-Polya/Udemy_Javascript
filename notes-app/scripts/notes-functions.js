
const public = true
let data
const processData = () => {
    data = '12308123'
}
processData()

// Read existing notes from localStorage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')

    try {
        return notesJSON  ? JSON.parse(notesJSON) : []
    } catch(e) {
        return []
    }
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
    const noteElement = document.createElement('a')
    const textElement = document.createElement('p')
    const statusElement = document.createElement('p')
    

    // Setup the note title text
    if(note.title.length > 0) {
        textElement.textContent = note.title
    }else{
        textElement.textContent='Unnamed note'
    }

    textElement.classList.add('list-item__title')


    // Set up the link
    noteElement.setAttribute('href',`/edit.html#${note.id}`)
    noteElement.classList.add('list-item')

    // Set up the status message
    statusElement.textContent = generateLastEdited(note.updatedAt)
    
    statusElement.classList.add('list-item__subtitle')


    noteElement.appendChild(textElement)
    noteElement.appendChild(statusElement)

    return noteElement
}

// Save the notes to localStorage
const saveNotes = (notes) => {
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
    const notesElement = document.querySelector('#notes')
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    
    if(filteredNotes.length >0 ){
        filteredNotes.forEach((note) => {
            const noteElement = generateNoteDom(note)
            notesElement.appendChild(noteElement)
        })
    } else {
         const emptyMessage = document.createElement('p')
         emptyMessage.textContent = 'No notes to show'
         emptyMessage.classList.add('empty-message')
         notesElement.appendChild(emptyMessage)
    }     
}

// Generate the last edited message
const generateLastEdited = (timeStamp) => {
    return `Last edited ${moment(timeStamp.updatedAt).fromNow()}`
}