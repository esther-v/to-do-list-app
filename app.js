//target dom elements
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


//functions
function addTodo(event){
    //prevent submit form
    event.preventDefault();
    //create todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')
    //create li item
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')

    todoDiv.appendChild(newTodo);
    //buttons
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //append to list
    todoList.appendChild(todoDiv);
    //clear input 
    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    const todo = item.parentElement;
    //DELETE
    if(item.classList[0] === 'trash-btn'){
        todo.classList.add('fall')
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
        
    }
    //check
    if(item.classList[0] === 'complete-btn'){
        todo.classList.toggle('completed');
    }
}