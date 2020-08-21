const toDo = ['game', 'study', 'playing', 'sex', 'breath']

toDo.splice(2,1)
toDo.push('new game')
toDo.shift()

console.log(`You have ${toDo.length} toDos`)

toDo.forEach(function(item, index)
{
    console.log(`${index+1}. ${item}`)
})