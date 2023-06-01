const addTask = document.querySelector('#add-task-btn')
const inputTask = document.querySelector('#input-task')
const addedTasks = document.querySelector('#tasks')
let idCounter = 0;
addTask.addEventListener('click', (event) => {
    const task = document.createElement('li')
    const finishedButton = document.createElement('input')
    finishedButton.type = 'checkbox';
    finishedButton.name = inputTask.value
    finishedButton.id = `Task ${idCounter}`
    // <input type="checkbox" name="" id="" />
    task.innerHTML = `${inputTask.value}<button><i class="fa fa-fw fa-trash"></i></button>`
    task.prepend(finishedButton)
    task.classList.add('task')

    finishedButton.addEventListener('click', (event) => {
        finishedButton.parentNode.classList.toggle('completed')
    })

    const deleteButton = task.querySelector('button')

    deleteButton.addEventListener('click', (event) => {
        addedTasks.removeChild(deleteButton.parentNode)
    })
    addedTasks.appendChild(task)
    inputTask.value = "";
    idCounter++
})

