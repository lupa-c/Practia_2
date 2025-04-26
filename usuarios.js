const formulario = document.getElementById("formulario-usuario");
const listaUsuarios = document.getElementById("lista-usuarios");
const totalUsuarios = document.getElementById("total-usuarios");
const errorDiv = document.getElementById("error");
const usuarios = [];
formulario.addEventListener("submit", function(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const edad = document.getElementById("edad").value.trim();

  if (!nombre || !email || !edad) {
    errorDiv.textContent = "Todos los campos son obligatorios.";
    return;
  }

  errorDiv.textContent = "";

  const usuario = { nombre, email, edad };
  usuarios.push(usuario);
  formulario.reset();
  actualizarListaUsuarios();
});
function actualizarListaUsuarios() {
  listaUsuarios.innerHTML = ""; 

  usuarios.forEach((usuario, index) => {
    const li = document.createElement("li");
    li.textContent = `${usuario.nombre} (${usuario.email}, ${usuario.edad} años)`;
    const btnEliminar = document.createElement("span");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("eliminar");
    btnEliminar.addEventListener("click", () => eliminarUsuario(index));

    li.appendChild(btnEliminar);
    listaUsuarios.appendChild(li);
  });
  totalUsuarios.textContent = `Total: ${usuarios.length}`;
}
function eliminarUsuario(index) {
  usuarios.splice(index, 1);
  actualizarListaUsuarios(); 
}
