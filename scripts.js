let tareas = [];
let count = 0;

document.addEventListener("DOMContentLoaded", function(){
    if(localStorage.getItem("tareas")){
        tareas = JSON.parse(localStorage.getItem("tareas"));
        tareas.forEach(function (tarea){
           AddFromStorage(tarea);
        })
    }
})

function AddFromStorage(task){
    console.log(task);
    let list = document.getElementById("list");

    let BTNdelete = document.createElement("button");
    BTNdelete.textContent = "Eliminar";
    BTNdelete.classList.add("btn", "btn-danger");
    BTNdelete.onclick = function(){
        list.removeChild("li");
    };
    let li = document.createElement("li");
    li.innerHTML = task.text;
    if(task.complete){
        li.classList.add("tachado");
    }
    li.onclick = function(){
        li.classList.toggle("tachado");
        if(!task.complete){
            task.complete = false;
        }else{
            task.complete = true;
        }
    }
    li.appendChild(BTNdelete);
    list.appendChild(li);
}
 

function AddTask(){

    var task = {
        id : count,
        text : document.getElementById("task").value,
        complete : false
    }


    if(!task){
        alert("Empty field!");
    }else{

        tareas.push(task);
        count++;
        let list = document.getElementById("list");

        let li = document.createElement("li");

        let BTNdelete = document.createElement("button");
        BTNdelete.textContent = "Eliminar";
        BTNdelete.classList.add("btn", "btn-danger");
        BTNdelete.onclick = function(){
        list.removeChild("li");
        };

        li.innerHTML = task.text;
        li.onclick = function(){
            li.classList.toggle("tachado");
            if(!task.complete){
                tareas[task.id].complete = true;
            }else{
                tareas[task.id].complete = false;
            }
            console.log(tareas);
        };
        li.appendChild(BTNdelete);
        list.appendChild(li);

        document.getElementById("task").value = "";

        console.log(tareas);

        localStorage.setItem("tareas", JSON.stringify(tareas));
    } 

}