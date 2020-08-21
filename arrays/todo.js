const toDo_list =
[
    {
        text : 'Order cat food',
        completed : false
    },
    {
        text : 'Clean Kitchen',
        completed : true
    },
    {
        text : 'Buy Food',
        completed : true
    },
    {
        text : 'Do work',
        completed : false
    },
    {
        text : 'Excercise',
        completed : false
    },
]

let deleteTodo = function(toDo_list, text)
{
    let toDoIndex = toDo_list.findIndex(function(toDo, index)
    {
        return toDo.text.toLowerCase() === text.toLowerCase()
    })
    
    if(toDoIndex >-1)
    {
        toDo_list.splice(toDoIndex,1)
    }

    
}

deleteTodo(toDo_list, 'buy food')
console.log(toDo_list)