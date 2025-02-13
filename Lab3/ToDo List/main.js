function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;
    taskText=taskText.charAt(0).toUpperCase()+taskText.slice(1).toLowerCase();

    if(taskText.length===1){
        return;
        //alert("could not be added to the list");
    }
    else if(taskText.length===1){
        alert("Could not be added to the list")
    }

    let li = document.createElement("li");

    let checkBox = document.createElement("input")
    checkBox.type="checkbox";
    checkBox.addEventListener("change", function(){
        if(this.checked){
            span.style.textDecoration = "line-through";
        }
        else {
            span.style.textDecoration = "none";
        }
    })
   
    let span = document.createElement("span");
    span.textContent=taskText;


    li.appendChild(checkBox);
    li.appendChild(span);

    document.getElementById("taskList").appendChild(li);
    taskInput.value="";

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.addEventListener('click',function(){
        let test = confirm("Remove?");
        if(test){
            li.remove();
        }
        
    })  
    li.appendChild(deleteButton);
    
   
}

