function mostrarPacientes() {
    let pacientes = []
    let localPacientes = localStorage.getItem("pacientes")
    if(localPacientes){
        pacientes = JSON.parse(localPacientes)
    }
    const tablaPacientes = document.getElementById("tabla-pacientes")
    const cuerpoTabla =
        tablaPacientes.getElementsByTagName("tbody")[0]
         pacientes.forEach(paciente => {
        let fila = cuerpoTabla.insertRow()
        let celdaNombre = fila.insertCell()
        let celdaApellido = fila.insertCell()
        let celdaNumeroCedula = fila.insertCell()
        let celdaEdad = fila.insertCell()
        let celdaTelefono = fila.insertCell()
        let celdaCorreo = fila.insertCell()
        let celdaEspecialidad = fila.insertCell()
        let celdaDoctor = fila.insertCell()

        celdaNombre.textContent = paciente.nombre
        celdaApellido.textContent = paciente.apellido
        celdaNumeroCedula.textContent = paciente.cedula
        celdaEdad.textContent = paciente.edad
        celdaTelefono.textContent = paciente.telefono
        celdaCorreo.textContent = paciente.correo
        celdaEspecialidad.textContent = paciente.especialidad
        celdaDoctor.textContent = "LISTA DE ESPERA"
    });
}

mostrarPacientes()
