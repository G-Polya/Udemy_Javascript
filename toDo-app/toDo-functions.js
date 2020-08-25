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

const removeTodo = function(id) {
    const todoIndex = toDo_list.findIndex(function(todo) {
        return todo.id === id
    })

    if(todoIndex > -1){
        toDo_list.splice(todoIndex,1)
    }
}

const toggleTodo = function(id) {
    const todo = toDo_list.find(function(todo) {
        return todo.id === id
    })

    if(todo !== undefined){
        todo.completed = !todo.completed
    }
}


const maketoDoDOM = function(todo) {
    const todoElement = document.createElement('div')
    const checkBox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')
    
    // Setup todo checkbox
    checkBox.setAttribute('type','checkbox')
    checkBox.checked = todo.completed
    todoElement.appendChild(checkBox)
    checkBox.addEventListener('change', function() {
        toggleTodo(todo.id)
        saveTodos(toDo_list)
        renderTodos(toDo_list, filters)
    })

    // Setup todo text
    todoText.textContent = todo.text
    todoElement.appendChild(todoText)

    // Setup button
    removeButton.textContent = 'x'
    todoElement.appendChild(removeButton)
    removeButton.addEventListener('click', function(){
        removeTodo(todo.id)
        saveTodos(toDo_list)
        renderTodos(toDo_list, filters)
    })


    return todoElement
}

const renderTodos = function (todos, filters) {

    const filteredTodos = makefilteredTodos(todos)


    document.querySelector('#todos').innerHTML = ''
    
    generateSummary(filteredTodos)

    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(maketoDoDOM(todo))
    })
}
