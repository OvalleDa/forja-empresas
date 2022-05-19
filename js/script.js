let form = document.getElementById('form-login');
let incorrectUser = document.getElementById("incorrect-user");

form.addEventListener('submit', validation=(e)=>{
    e.preventDefault();


    userName = document.getElementById('user').value;
    userPassword = document.getElementById('password').value;

    if(userName === "Admin" && userPassword === "Kuepa2022"){
        //Redireccionamiento a Dashboard
        window.setTimeout(()=>{
            window.location.href="dashboard.html"
        },500);
    }
    else{
    incorrectUser.innerHTML =  `<p>El usuario o la contraseña son incorrectos</p>`
    incorrectUser.style.setProperty("visibility", "visible");
    incorrectUser.style.setProperty("opacity", "1");
    }

});