const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    return todosJSON  ? JSON.parse(todosJSON) : []    
}

const makefilteredTodos = (todos) => todos.filter( (todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
})


const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}


const generateSummary = (filteredTodos) => {
    const incompleteTodos = filteredTodos.filter( (todo) => !todo.completed)
    const summary = document.createElement('h2')
    
    const plural = incompleteTodos.length === 1 ? '' : 's'

    summary.classList.add('list-title')

    summary.textContent = `You have ${incompleteTodos.length} todo${plural} left`
    document.querySelector('#todos').appendChild(summary)
}

const removeTodo = (id) => {
    const todoIndex = toDo_list.findIndex( (todo) => todo.id === id)

    if(todoIndex > -1){
        toDo_list.splice(todoIndex,1)
    }
}

const toggleTodo = (id) => {
    const todo = toDo_list.find( (todo) => todo.id === id)

    if(todo) {
        todo.completed = !todo.completed
    }
}


const maketoDoDOM = (todo) => {
    const todoElement = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkBox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')
    
    // Setup todo checkbox
    checkBox.setAttribute('type','checkbox')
    checkBox.checked = todo.completed
    containerEl.appendChild(checkBox)
    checkBox.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(toDo_list)
        renderTodos(toDo_list, filters)
    })

    // Setup todo text
    todoText.textContent = todo.text
    containerEl.appendChild(todoText)

    // Set up container
    todoElement.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoElement.appendChild(containerEl)

    // Setup button
    removeButton.textContent = 'remove'
    removeButton.classList.add('button', 'button--text')
    todoElement.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(toDo_list)
        renderTodos(toDo_list, filters)
    })
    
    return todoElement
}

const renderTodos = (todos, filters) => {
    const todoEl = document.querySelector('#todos')

    const filteredTodos = makefilteredTodos(todos)


    todoEl.innerHTML = ''
    
    generateSummary(filteredTodos)


    if(filteredTodos.length > 0) {    
        filteredTodos.forEach( (todo) => {
            todoEl.appendChild(maketoDoDOM(todo))
        })
    } else{
        const messageEl = document.createElement('p')
        messageEl.classList.add('empty-message')
        messageEl.textContent = 'No to-dos to show'
        todoEl.appendChild(messageEl)
    }

}
