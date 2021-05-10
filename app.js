
//Selectors
const Input = document.querySelector('.input-text')
const AddButton = document.querySelector('.submit-button')
const List = document.querySelector('.list')
const Option = document.querySelector('.filter')


//Event Listeners
AddButton.addEventListener('click', addTodo)
List.addEventListener('click', deleteCheck)
Option.addEventListener('click', filterTodo)

//Functions

function addTodo(event) {
    //Todo div
    const newDiv = document.createElement('div')
    newDiv.classList.add('todo')

    //Create list
    const newTodo = document.createElement('li') //innerHTML
    newTodo.innerText = Input.value
    newTodo.classList.add('todo-item')
    newDiv.appendChild(newTodo)
    
   
    //Check button
    const completedButton = document.createElement('button')
    completedButton.setAttribute("class","check-btn")
    completedButton.innerHTML = '<img class ="check-img" src = check.png>'
    newDiv.appendChild(completedButton)

    //Delete button
    const deleteButton = document.createElement('button')
    deleteButton.setAttribute("class","delete-btn")
    deleteButton.innerHTML = '<img class ="delete-img" src = delete.png>'
    newDiv.appendChild(deleteButton)

    //Append to todo list
    List.appendChild(newDiv)
    
    //Clear input
    Input.value=""

}

function deleteCheck(e){
    
    const item = e.target
    
    if(item.classList[0] === "delete-btn"){
        const parent = item.parentElement
        parent.classList.add("fall")
        parent.addEventListener("transitionend",function(){
            parent.remove()
        });
    }

    if(item.classList[0] === "check-btn"){
        const parent = item.parentElement
        parent.classList.toggle("checked")
    }

}

function filterTodo(e){

    const filtroList = List.childNodes

    filtroList.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break
            case "completed":
                if(todo.classList.contains('completed')) {
                    todo.style.display = 'flex'
                }
                else{
                    todo.style.display = 'none';
                }
                break
            case "uncompleted":
                if(todo.classList.contains('uncompleted')) {
                    todo.style.display = 'flex'
                }
                else{
                    todo.style.display = 'none';
                }
                break
        }
    });

}

function saveTodos(todo){

}