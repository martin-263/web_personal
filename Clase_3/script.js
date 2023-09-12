
function agregarTarea() {
    const nuevaTareaInput = document.getElementById("nuevaTarea");
    const listaTareas = document.getElementById("listaTareas");
    const nuevaTareaTexto = nuevaTareaInput.value.trim();
    if (nuevaTareaTexto !== "") {
    const nuevaTarea = document.createElement("li");
    const spanElement = document.createElement("span");
    spanElement.textContent = nuevaTareaTexto;
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "delete";
    botonEliminar.onclick = function() {
    listaTareas.removeChild(nuevaTarea);
    };
    var botonMarcar = document.createElement("INPUT");   
    botonMarcar.setAttribute ("type", "checkbox");
    botonMarcar.className = "checkbox";
    botonMarcar.onclick = function() {
    nuevaTarea.classList.toggle("completed");
    spanElement.classList.toggle ("line");
    };
    nuevaTarea.appendChild(spanElement);
    nuevaTarea.appendChild(botonMarcar);
    nuevaTarea.appendChild(botonEliminar);
    listaTareas.appendChild(nuevaTarea);
    nuevaTareaInput.value = "";
    }
    }
 
    document.getElementById("agregar").addEventListener("click",
    agregarTarea);
    
    function mostrarCompletadas() {
        const tareas = document.querySelectorAll("li");
        tareas.forEach(tarea => {
        if (tarea.classList.contains("completed")) {
        tarea.style.display = "flex";
        } else {
        tarea.style.display = "none";
        }
        });
        }

        function mostrarPendientes() {
        const tareas = document.querySelectorAll("li");
        tareas.forEach(tarea => {
        if (tarea.classList.contains("completed")) {
        tarea.style.display = "none";
        } else {
        tarea.style.display = "flex";
        }
        });
        }

        function mostrarTodas() {
            const tareas = document.querySelectorAll("li");
            tareas.forEach(tarea => {
            tarea.style.display = "flex";
            });
            };
    
        document.getElementById("mostrarTodas").addEventListener("click", mostrarTodas);

        document.getElementById("mostrarCompletadas").addEventListener("click", mostrarCompletadas);
 
        document.getElementById("mostrarPendientes").addEventListener("click", mostrarPendientes);
        