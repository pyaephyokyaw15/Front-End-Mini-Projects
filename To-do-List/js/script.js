//  -------------------- Selectors -----------------------
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');
// Get todo list from local Storage. If there is nothing, create an empty array.
const todos = JSON.parse(localStorage.getItem("todos")) || []; 


// ------------------- Functions --------------------------
// Save Local Storage
function saveLocalTodos(todo){
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}


// Remove from Local Storage
function removeLocalTodos(todo){
    const todoTask = todo.children[0].innerText;
    console.log(todos.indexOf(todoTask));
    todos.splice(todos.indexOf(todoTask), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}


// Display Task
function displayTask(task) {
    // Create div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Drag Handle
    const dragHandle = document.createElement('div');
    dragHandle.classList.add('drag-handle');
    dragHandle.innerHTML = '<i class="fas fa-grip-vertical fa-lg"></i>';
    todoDiv.appendChild(dragHandle);

    // Task
    const newTodo = document.createElement('div');
    newTodo.classList.add('todo-item');
    newTodo.innerText = task;
    todoDiv.appendChild(newTodo);

    // barrier between task and buttons
    const space = document.createElement('div');
    space.classList.add('space');
    todoDiv.appendChild(space);

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
    todoList.appendChild(todoDiv); // Append todo list
}


// get todos in local storage
function getTodos() {
    todos.forEach(displayTask);
}


// --------------------------- Start ---------------------------
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

// Sort Items
const dragArea = document.querySelector('.todo-list');
new Sortable(dragArea, {
    animation: 300,
    handle:'.drag-handle',
});