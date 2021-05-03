
//Selectors
const selectedInput = document.querySelector('.input-text');
const selectedButton = document.querySelector('.submit-button');
const selectedList = document.querySelector('.container-list');

//Event Listeners
selectedButton.addEventListener('click', addTodo);

//Functions

function addTodo(event) {
    console.log("ayyyy");

    //Todo Div
    const newDiv = document.createElement('div');
    newDiv.classList.add('Todo');

    //Create List
    const newTodo = document.createElement('li');
    newTodo.innerText = 'Hellooo';
    newTodo.classList.add('todo-item');
    newDiv.appendChild(newTodo);
    
   
    //Check mark button
    const completedButton = document.createElement('submit-button');
    //add image
    newDiv.appendChild(completedButton);

    //Delete Button
    const deleteButton = document.createElement('submit-button');
    //add image
    newDiv.appendChild(deleteButton);

    //Append to list
    selectedList.appendChild(newDiv);


}