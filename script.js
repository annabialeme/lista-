let task = [];

function click() {
    let task = document.getElementById("task");
    let texto = task.ariaValueMax.trim();

    if (texto === "") {
        alert ("Atenção, digite uma tarefa");
        return;
    }

    task.push(texto);
    task.value = "";

    updateLista();
}

function removeTask(index) {
    task.splice(index, 1);
    updateLista();
}

function updateLista() {
    let Lista = document.getElementById("Lista");
    Lista.innerHTML = "";

    task.forEach((task, index) => {
        let taskDiv = document.createElement("div");
        taskDiv.className = "task";
        taskDiv.innerHTML = `
        <span>${task}</span>
        <button onclick = "removeTask(${index})">Remover</button>
        `;
        Lista.appendChild(taskDiv);
    });
}

