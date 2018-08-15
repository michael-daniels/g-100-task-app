for (let i = 1; i <= localStorage.length; i++) {
  document.getElementById('allTasks').insertAdjacentHTML('beforeend', `
    <div>${localStorage.getItem(i)}</div>
  `)
}

let taskButton = document.getElementById('addTaskButton')


  taskButton.addEventListener('click', function(event) {
    console.log('the event', event)
    event.preventDefault()
    let newTask = document.forms.taskForm.taskInput.value
    localStorage.setItem(localStorage.length + 1, newTask)

    document.getElementById('allTasks').insertAdjacentHTML('beforeend', `
      <div>${newTask}</div>
    `)


    document.getElementById('taskInput').value = ''
  })
