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


// const paragraphs = document.querySelectorAll('p')

// paragraphs.forEach(function(p) {
//     if(!p.textContent.includes('the')){
//         p.remove()
//     }
// })


const incompleteToDos = toDo_list.filter(function(toDo){
return !toDo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteToDos.length} toDos left`
document.querySelector('body').appendChild(summary)

const filters = {
    completed : undefined
}

const renderToDo = function(toDo_list, filters) {
    const filteredToDo = toDo_list.filter(function(toDo) {
        toDo.completed === false
    })

    document.querySelector('#toDos').innerHTMl = ''
    
    filteredToDo.forEach(function(toDo) {
        const toDoElement = document.createElement('p')
        toDoElement.textContent = toDo.text
        document.querySelector('#toDos').appendChild(toDoElement)
    })

}

renderToDo(toDo_list, filters)

// toDo_list.forEach(function(toDo){
// const p = document.createElement('p')
// p.textContent = toDo.text
// document.querySelector('body').appendChild(p)
// })

// Listen for new todo creation
document.querySelector('button#add-todo').addEventListener('click', function (e){
    console.log('Add a new toDo...')
})

// Listen for todo text change
document.querySelector('#new-todo-text').addEventListener('change', function(e){
    filters.completed === e.target.completed
    renderToDo(toDo_list, filters)
})