// Login JS
const boton = document.getElementById("button-enviar");


boton.addEventListener("click", function valida(e){
let usuario = document.getElementById("user");
let valorUsuario = usuario.value
let contraseña = document.getElementById("password");
let valorContraseña = contraseña.value
let incorrectUser = document.getElementById("incorrect-user");


console.log(valorUsuario);
console.log(valorContraseña);
e.preventDefault()
console.log(usuario);
console.log(contraseña);
if (valorUsuario == "Admin" && valorContraseña == "Kuepa2022"){
    window.location.href="dashboard.html";
} else{
    incorrectUser.innerHTML =  `<p>El usuario o la contraseña son incorrectos</p>`
    incorrectUser.style.setProperty("visibility", "visible");
    incorrectUser.style.setProperty("opacity", "1");
}
});



