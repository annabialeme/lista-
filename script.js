let tasks = []; 

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Digite aqui");
        return;
    }

    tasks.push(taskText); 
    taskInput.value = ""; 

    updateTaskList(); 
}

function removeTask(index) {
    tasks.splice(index, 1); 
    updateTaskList(); 
}

function updateTaskList() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; 

    tasks.forEach((task, index) => {
        let taskDiv = document.createElement("div");
        taskDiv.className = "task";
        taskDiv.innerHTML = `
            <span>${task}</span>
            <button onclick="removeTask(${index})">Remove</button>
        `;
        taskList.appendChild(taskDiv);
    });
}