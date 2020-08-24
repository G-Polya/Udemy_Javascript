const getSavedTodos = function() {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

const makefilteredTodos = function(todos) {
    return todos.filter(function(todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })
}

const saveTodos = function(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}


const generateSummary = function(filteredTodos) {
    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)
}

const maketoDoDOM = function(todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    return p
}

const renderTodos = function (todos, filters) {

    const filteredTodos = makefilteredTodos(todos)


    document.querySelector('#todos').innerHTML = ''

    generateSummary(filteredTodos)

    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(maketoDoDOM(todo))
    })
}
