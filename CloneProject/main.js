
let titleElemGlobal;


window.onload = function() {

    let savedTasks = localStorage.getItem('savedTasks');

    if (savedTasks) {

        let tasksContainer = document.getElementById("tasks");

        tasksContainer.innerHTML = savedTasks;

    }

}



function saveTasks() {

    const tasksContainer = document.getElementById("tasks");

    localStorage.setItem('savedTasks', tasksContainer.innerHTML);


}



function addTask(){

    const display = document.getElementById("add-task")

    display.classList.add('active')

}

function editTask(){

    const display = document.getElementById("edit-card")

    display.classList.add('active')

}

function cancelTodo(){
    
    const t = document.getElementById("input")

    const cancelButton = document.getElementById("add-task")

    cancelButton.classList.remove('active')
     
    t.value = ""

}

function cancelTodoEdit(){

    const cancelButton = document.getElementById("edit-card")

    cancelButton.classList.remove('active')

    const editInput = document.getElementById("edit-input").value

    editInput.value = ""

}

function completeTodo(){
    
    const getDiv = document.getElementById("tasks")

    const inputV = document.getElementById("input")

    let v  = inputV.value

    if(v !== ""){

    let card = document.createElement('div')
    card.id = 'card'
    card.className = ''

    let comp = document.createElement('div')
    comp.className = 'comp'

    let check = document.createElement('input')
    check.type = 'checkbox'
    check.setAttribute('onclick', 'overLay(this)')
    check.id = 'check'
    check.className = ''

    let title = document.createElement('div')
    title.id = 'title'
    
    let titlemain = document.createElement('h3')
    titlemain.id = 'h3-title'
    titlemain.textContent = `${inputV.value}`

    let edit = document.createElement('div')
    edit.className = 'edit-btn'


    let btn = document.createElement('button')
    btn.id ="edit-btn"
    btn.setAttribute('onclick','editFunction(this)')
    btn.textContent = "Edit"

    let btn2 = document.createElement('button')
    btn2.id = "delete-btn"
    btn2.setAttribute('onclick','deleteTask(this)')
    btn2.textContent = "Delete"
    
    
    edit.appendChild(btn)
    edit.appendChild(btn2)
    title.appendChild(titlemain)
    comp.appendChild(title)
    comp.appendChild(edit)
    card.appendChild(check)
    card.appendChild(comp)
    getDiv.appendChild(card)

    inputV.value = ""

    saveTasks()

    }else alert("Please insert a value!")

}





function isPressed(event){

    if(event.key === 'Enter'){

        completeTodo()

        saveTasks()

    }
}


function deleteTask(button){

    const card = button.closest("#card")

    card.remove();

    saveTasks()

}


function overLay(input){

    const check = input.closest("#card").querySelector("#check")

    const title = input.closest("#card").querySelector("#title")

    if(check.checked){

        title.classList.add("overlay")

        saveTasks()

    }else if(!check.checked){

        title.classList.remove("overlay")

        saveTasks()

    }

}



function editFunction(button){
    
    editTask()

    titleElemGlobal = button.closest("#card").querySelector("#h3-title")

    const titleText = titleElemGlobal.textContent

    const editInput = document.getElementById("edit-input")

    editInput.value = titleText

    saveTasks()
    
}

function completeTodoEdit() {

    const editInput = document.getElementById("edit-input").value

    if(editInput !== ""){

        titleElemGlobal.textContent = editInput

        saveTasks()

        cancelTodoEdit()

    }else alert("Please insert a new value!")

}
