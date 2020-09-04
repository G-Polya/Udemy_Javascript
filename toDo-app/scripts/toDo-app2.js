const toDo_list =[{
    text : 'Order cat food',
    completed : false
},{
    text : 'Clean Kitchen',
    completed : true
},{
    text : 'Buy Food',
    completed : true
},{
    text : 'Do work',
    completed : false 
},{
    text : 'Excercise',
    completed : false
}]

const filters = {
    searchText : '',
    hideCompleted:false
}




const renderToDo = function(toDo_list, filters){
    let filteredToDos = toDo_list.filter(function(toDo) {
        const searchTextMatch = toDo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !toDo.completed
        
        return searchTextMatch && hideCompletedMatch
        // return toDo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    // filteredToDos = filteredToDos.filter(function(toDo) {
    //     return !filters.hideCompleted || !toDo.completed
        
    //     // if(filters.hideCompleted){
    //     //     return !toDo.completed
    //     // }else{
    //     //     return true
    //     // }
    // })

    const incompleteToDos = filteredToDos.filter(function(toDo){
        return !toDo.completed
    })
        
    document.querySelector('#toDos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteToDos.length} toDos left`
    document.querySelector('#toDos').appendChild(summary)
    
    filteredToDos.forEach(function(toDo) {
        const p = document.createElement('p')
        p.textContent = toDo.text
        document.querySelector('#toDos').appendChild(p)
    })
}

renderToDo(toDo_list, filters)


document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderToDo(toDo_list, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function(e) {
    e.preventDefault()

    toDo_list.push({
        text : e.target.elements.text.value,
        completed : false
    })

    renderToDo(toDo_list, filters)
    e.target.elements.text.value = ''
})

document.querySelector('#show-completed').addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked
    renderToDo(toDo_list, filters)
})