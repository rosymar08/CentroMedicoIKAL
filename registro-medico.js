const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const cedula = document.getElementById("cedula")
const numeroConsultorio = document.getElementById("consultorio")
const telefono = document.getElementById("telefono")
const correo = document.getElementById("correo")
const especialidad = document.getElementById("especialidad")
const formularioRegistro = document.getElementById("registro-medicos-form")

formularioRegistro.addEventListener("submit", function(event){
    event.preventDefault()
   
    const medico = {
        nombre: nombre.value,
        apellido: apellido.value,
        cedula: cedula.value,
        consultorio: numeroConsultorio.value,
        telefono: telefono.value,
        correo: correo.value,
        especialidad: especialidad.value
    }
    let medicos = []
    let localMedicos = localStorage.getItem("medicos")
    if (localMedicos){
        medicos = JSON.parse(localMedicos)
    }
    medicos.push(medico)
    localStorage.setItem("medicos", JSON.stringify(medicos))
    formularioRegistro.reset()
    alert("Medico registrado con exito")
}}