let toDo_list = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}


renderTodos(toDo_list, filters)

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(toDo_list, filters)
})

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    const text = e.target.elements.text.value.trim()

    if(text.length > 0) {
        toDo_list.push({
            id : uuidv4(),
            text : text,
            completed: false
        })
    
        saveTodos(toDo_list)
        renderTodos(toDo_list, filters)
        e.target.elements.text.value = ''
    
    }
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(toDo_list, filters)
})