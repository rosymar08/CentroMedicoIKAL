const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const cedula = document.getElementById("cedula")
const edad = document.getElementById("edad")
const telefono = document.getElementById("telefono")
const correo = document.getElementById("correo")
const especialidad = document.getElementById("especialidad")
const formularioRegistro = document.getElementById("registro-pacientes-form")

formularioRegistro.addEventListener("submit", function(event){
    event.preventDefault()
   
    const paciente = {
        nombre: nombre.value,
        apellido: apellido.value,
        cedula: cedula.value,
        edad: edad.value,
        telefono: telefono.value,
        correo: correo.value,
        especialidad: especialidad.value
    }
    let pacientes = []
    let localPacientes = localStorage.getItem("pacientes")
    if (localPacientes){
        pacientes = JSON.parse(localPacientes)
    }
    pacientes.push(paciente)
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
    formularioRegistro.reset()
    alert("Paciente registrado con exito")
})