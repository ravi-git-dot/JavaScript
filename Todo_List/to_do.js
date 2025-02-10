//select the input ,button and todolist element 

const input = document.getElementById("input");
const btn = document.getElementById("add");
const list = document.getElementById("todolists");

//Local Storage
let todos = [];
window.onload = () => {
   // console.log("loaded")
     todos = JSON.parse(localStorage.getItem("todos")) || [] ;
    todos.forEach(todo => addtodo(todo));
}

btn.addEventListener('click', ()=>{
    todos.push(input.value);
    localStorage.setItem('todos',JSON.stringify(todos));
    console.log(todos);
    addtodo(input.value);
    input.value = '';
})

function addtodo(todo){
    let newlist = document.createElement("li")
    newlist.innerText = todo
    list.appendChild(newlist)
    
    newlist.addEventListener('click', ()=>{
          newlist.style.textDecoration = 'line-through';
          remove(todo);
    })
    newlist.addEventListener('dblclick',()=>{
        list.removeChild(newlist);
        remove(todo);
    })

}

function remove(todo){
    let index = todos.indexOf(todo);
    if(index > -1){
        todos.splice(index,1) 
    }
    localStorage.setItem('todos',JSON.stringify(todos))  
}