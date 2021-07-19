alert("Nota: este proyecto es de registro, falta la parte del servidor");


const nombre = document.getElementById("name");
const email = document.getElementById("email");
const mensaje = document.getElementById("materia");
const button = document.getElementById("enviar");
const resultado = document.getElementById("result");

const validarCampos = () => {
    let error = [];
    if (nombre.value.length < 4) {
        error[0] = true;
        error[1] = "  * El nombre no puede contener menos de 4 caracteres  *  "
        return error;
    } else if (nombre.value.length > 55) {
        error[0] = true;
        error[1] = "  * El nombre no puede contener mas de 55 caracteres  *  "
        return error;
    } else if (email.value.length < 5 ||
        email.value.length > 45 ||
        email.value.indexOf("@") == -1 ||
        email.value.indexOf(".") == -1) {

        error[0] = true;
        error[1] = "  * El email no es valido  *  "
        return error;
    }
     else if (nombre.value.length <  10) {
        error[0] = true;
        error[1] = "  * El mensaje no puede ser de pocos caracteres  *  "
        return error;
    }
    error[0] = false;
    return error;
}
button.addEventListener("click", (e) => {
    e.preventDefault();
    let error = validarCampos();
    if (error[0]) {
        resultado.innerHTML = error[1];
        resultado.classList.add("negado");
    } else {
        resultado.innerHTML = "Solicitud envida correctamente";
        resultado.classList.add("aceptado");
    }
});