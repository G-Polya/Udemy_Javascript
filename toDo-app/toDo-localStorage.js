let toDo_list = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}


renderTodos(toDo_list, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(toDo_list, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    toDo_list.push({
        id : uuidv4(),
        text: e.target.elements.text.value,
        completed: false
    })

    saveTodos(toDo_list)
    renderTodos(toDo_list, filters)
    e.target.elements.text.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(toDo_list, filters)
})