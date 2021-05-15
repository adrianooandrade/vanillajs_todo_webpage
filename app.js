//Selectors
const Input = document.querySelector('.input-text')
const AddButton = document.querySelector('.submit-button')
const List = document.querySelector('.list')
const Filter = document.querySelector('.filter')


//Event Listeners
AddButton.addEventListener('click', addTodo)
List.addEventListener('click', checkClick)
Filter.addEventListener('change', filterTodo)
document.addEventListener('DOMContentLoaded',getTodos)
document.addEventListener('DOMContentLoaded',countdown)

//Functions

function countdown() {
    const targetDate = new Date("June 30, 2021 00:00:00").getTime()
    const currentDate = new Date().getTime()
    const difference = targetDate - currentDate;

    const second = 1000 //milliseconds
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const renderDay = Math.floor(difference / day)
    const renderHour = Math.floor((difference % day) / hour)
    const renderMinute = Math.floor((difference % hour) / minute)
    const renderSecond = Math.floor((difference % minute) / second)
    
    document.querySelector(".day").innerText = renderDay;
    document.querySelector(".hour").innerText = renderHour;
    document.querySelector(".minute").innerText = renderMinute;
    document.querySelector(".second").innerText = renderSecond;

    setInterval(countdown,1000)
}


function addTodo(_event) {

    if(Input.value==""){
        alert("Write something")
        return
    }
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
    
    saveTodos(Input.value)

    //Clear input
    Input.value=""

}

function checkClick(e){

    const item = e.target
    if(item.classList[0] === "check-btn"){
        const parent = item.parentElement
        parent.classList.toggle("checked")
    }

    if(item.classList[0] === "delete-btn"){
        const parent = item.parentElement
        parent.classList.add("fall")
        deleteTodos(parent)
        parent.addEventListener("transitionend",function(){
            parent.remove()
        });
    }

}

function filterTodo(e){
    //div.todo 
    //div.todo.checked

    const todos = List.childNodes
    console.log(todos)
    todos.forEach(function(child){
        switch(e.target.value){
            case "all":
                child.style.display = "flex";
                break
            case "completed":
                if(child.classList.contains('checked')) {
                    child.style.display = "flex";
                }
                else{
                    child.style.display = "none";
                }
                break
            case "uncompleted":
                if(!child.classList.contains('checked')) {
                    child.style.display = "flex";
                }
                else{
                    child.style.display = "none";
                }
                break
        }
    })

}

function saveTodos(tarefa){
    let todos
    if(localStorage.getItem('lista') === null){
        todos = []
    }
    else{
        todos = JSON.parse(localStorage.getItem("lista"))
    }
    todos.push(tarefa)
    localStorage.setItem("lista", JSON.stringify(todos))
}

function getTodos(){
    let todos
    if(localStorage.getItem('lista') === null){
        todos = []
    }
    else{
        todos = JSON.parse(localStorage.getItem("lista"))
    }
    todos.forEach(function(todo){
        const newDiv = document.createElement('div')
        newDiv.classList.add('todo')

        //Create list
        const newTodo = document.createElement('li') //innerHTML
        newTodo.innerText = todo
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
    })
    localStorage.setItem("lista", JSON.stringify(todos))
}

function deleteTodos(tarefa){
    let todos
    if(localStorage.getItem('lista') === null){
        todos = []
    }
    else{
        todos = JSON.parse(localStorage.getItem("lista"))
    }
    const index = tarefa.children[0].innerText;
    console.log(index)
    todos.splice(todos.indexOf(index),1)
    localStorage.setItem("lista", JSON.stringify(todos))

}
