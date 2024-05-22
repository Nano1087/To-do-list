const btn = document.querySelector("#btn");
const tarea = document.querySelector("#tarea");
const form = document.querySelector("#form");
const listaDeTareas = document.getElementById('lista-de-tareas');



form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (tarea.value !== "") {
     console.log("se ingreso una tarea");
     createTarea(tarea.value);
     tarea.value = "";
    
    }
  });
 

 

function createTarea(value) {
  let tareaNueva = document.createElement('div');
  tareaNueva.classList.add('tarea');

  // Texto ingresado por el usuario.
  let texto = document.createElement('p');
  texto.innerText = tarea.value;
  tareaNueva.appendChild(texto);

  // Crear y agregar contenedor de los iconos
  let iconos = document.createElement('div');
  iconos.classList.add('iconos'); 
  tareaNueva.appendChild(iconos);

  // Crear y agregar iconos.
  let completar = document.createElement('i');
  completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
  completar.addEventListener('click', completarTarea);

  let eliminar = document.createElement('i');
  eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
  eliminar.addEventListener('click', eliminarTarea);

  iconos.append(completar, eliminar);

  // Agregar la tarea a la lista.
  listaDeTareas.appendChild(tareaNueva);
  localStorage.setItem(Date.now(), tarea.value);
  
}


// Marcar una tarea como completada.
function completarTarea(e) {
let tarea = e.target.parentNode.parentNode;
tarea.classList.toggle('completada');
}

// Eliminar una tarea del DOM.
function eliminarTarea(e) {
let tarea = e.target.parentNode.parentNode;
console.log( e.target);
tarea.remove();
}





