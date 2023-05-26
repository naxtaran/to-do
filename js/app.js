let $ = document
const inputElem = $.getElementById('itemInput')
const addButton = $.getElementById('addButton')
const clearButton = $.getElementById('clearButton')
const todoListElem = $.getElementById('todoList')

let todosArray = []

function addNewTodo () {
    let newTodoTitle = inputElem.value

    let newTodoObj = {
        id: todosArray.length + 1,
        title: newTodoTitle,
        complete: false
    }

    inputElem.value = ''

    todosArray.push(newTodoObj)
    setLocalStorage(todosArray)
    todosGenerator(todosArray)
}

function setLocalStorage (todosList) {
    localStorage.setItem('todos', JSON.stringify(todosList))
}

function todosGenerator (todosList) {

    let newTodoLiElem, newTodoLabalElem, newTodoCompleteBtn, newTodoDeleteBtn

    todosList.forEach(function (todo) {
        console.log(todo);
        newTodoLiElem = $.createElement('li')
        newTodoLiElem.className = 'completed well'

        newTodoLabalElem = $.createElement('label')
        newTodoLabalElem.innerHTML = todo.title

        newTodoCompleteBtn = $.createElement('button')
        newTodoCompleteBtn.className =  'btn btn-success'
        newTodoCompleteBtn.innerHTML = 'Complete'
        
        newTodoDeleteBtn = $.createElement('button')
        newTodoDeleteBtn.className = 'btn btn-danger'
        newTodoDeleteBtn.innerHTML = 'Delete'

        newTodoLiElem.append(newTodoLabalElem, newTodoCompleteBtn, newTodoDeleteBtn)

        todoListElem.append(newTodoLiElem)
    })
}

addButton.addEventListener('click', addNewTodo)