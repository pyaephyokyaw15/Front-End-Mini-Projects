// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');
// Get todo list from local Storage. If there is nothing, create an empty array.
const todos = JSON.parse(localStorage.getItem("todos")) || []; 





// Display todo Lists from local storage
document.addEventListener('DOMContentLoaded', getTodos);

// add task
todoButton.addEventListener('click', () => {
    const newTask = todoInput.value;
    // Display the new task in task lists
    displayTask(newTask);

    // Save in local Storage
    saveLocalTodos(newTask);

    // Clear todo input value
    todoInput.value = '';
});


// remove or complete task
todoList.addEventListener('click', event => {
    // console.log(event.target);
    // console.log(event.target.parentElement);
    const item = event.target;

    // remove task
    if (item.classList.contains('trash-btn')) {
        const todo = item.parentElement;
        //Animation 
        todo.classList.add('fall');
        removeLocalTodos(todo);

        // After animation end
        todo.addEventListener('transitionend', () => {
            todo.remove();
            
        })
        
    }

    // complete task
    else if (item.classList.contains('complete-btn')) {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
});


// Filter
filterOption.addEventListener('click', event => {
    const todos = todoList.childNodes;
    console.log(todos);
    console.log(event.target);
    todos.forEach(function (todo) {
        switch(event.target.value) {
            case 'all':
                todo.style.display = 'flex';
                break;

            case 'completed':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;

            case 'uncompleted':
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    });
});


// Save Local Storage
function saveLocalTodos(todo){
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function removeLocalTodos(todo){
    const todoTask = todo.children[0].innerText;
    console.log(todos.indexOf(todoTask));
    todos.splice(todos.indexOf(todoTask), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}


function getTodos() {
    todos.forEach(displayTask);
}


function displayTask(task) {
    // Create div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Create div
    const newTodo = document.createElement('div');
    newTodo.classList.add('todo-item');
    newTodo.innerText = task;
    todoDiv.appendChild(newTodo);

    // Complete Button
    const completedButton = document.createElement('button');
    completedButton.classList.add('complete-btn');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(completedButton);

    // Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('trash-btn');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(deleteButton);

    // Append todo list
    todoList.appendChild(todoDiv);
}