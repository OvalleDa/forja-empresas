const search = document.getElementById ("searchicon");



search.addEventListener("click", function user(e){
 let identidad = document.getElementById("documento") 
 let valorIdentidad = identidad.value
 let prueba = document.getElementById("prueba")

 e.preventDefault()

 console.log(valorIdentidad)
 if(valorIdentidad == 52368795){   
     // alert("Usuario: Jairo, Dosis: Usted cuenta solo con la primera dosis, Tipo: Pfizer, Fecha: La fecha de la primera dosis es: 08/07/2021, Información: Se necesita ingresar datos para la segunda dosis ")
     Swal.fire({
      title: 'Esquema de vacunación',
      icon: 'info',
      iconColor: "white", 
      html:
      '<b>Nombre:</b> Jairo Pineda<br> ' +
      '<b>Primera Dosis:</b> Sí<br>' +
      '<b>Fecha de aplicación:</b> 08/07/2021<br> ' +
      '<b>Tipo:</b> Pfizer<br>' +
      '<b>Segunda dosis:</b> No<br> ' +
      `<h3>El usuario sólo cuenta con una primera dosis ¿Desea agendar la siguiente dosis?</h3> `,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Aceptar',
      denyButtonText: `Cancelar`,
      background: "#1d1b45",
      color: "white",
      backdrop:"true" , 
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
       window.setTimeout(()=>{
       window.location.href="vacunacion.html"
      },0);
      } else if (result.isDenied) {
        
      }
    })

 }
 else if(valorIdentidad ==1001235478){
   Swal.fire({
      title: 'Esquema de vacunación',
      icon: 'info',
      iconColor: "white", 
      html:
      '<b>Nombre:</b> Colette Díaz<br> ' +
      '<b>Primera Dosis:</b> Sí<br>' +
      '<b>Fecha de aplicación:</b> 02/17/2022<br> ' +
      '<b>Tipo:</b> Pfizer<br>' +
      '<b>Segunda dosis:</b> Sí<br> ' +
      '<b>Fecha de aplicación:</b> 03/27/2022<br> ' +
      `<h3>El usuario sólo cuenta con dos dosis ¿Desea agendar la siguiente dosis?</h3> `,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Aceptar',
      denyButtonText: `Cancelar`,
      background: "#1d1b45",
      color: "white",
      backdrop:"true" , 
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
       window.setTimeout(()=>{
        window.location.href="vacunacion.html"
      },0);
      } else if (result.isDenied) {
        
      }
    })
 }
 else if(valorIdentidad ==25413574){
   Swal.fire({
      title: 'Esquema de vacunación',
      icon: 'info',
      iconColor: "white", 
      html:
      '<b>Nombre:</b> Juan Reyes<br> ' +
      '<b>Primera Dosis:</b> Sí<br>' +
      '<b>Fecha de aplicación:</b> 04/12/2021<br> ' +
      '<b>Tipo:</b> Pfizer<br>' +
      '<b>Segunda dosis:</b> Sí<br> ' +
      '<b>Fecha de aplicación:</b> 06/02/2022<br> ' +
      '<b>Tercera dosis:</b> Sí<br> ' +
      '<b>Fecha de aplicación:</b> 10/04/2022<br> ' +
      `<h3>El usuario cuenta con todas las dosis</h3> `,
      showCancelButton: false,
      confirmButtonText: 'Aceptar',
      background: "#1d1b45",
      color: "white",
      backdrop:"true" , 
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
       window.setTimeout(()=>{
       window.location.href="dashboard.html"
      });
      } else if (result.isDenied) {
        
      }
    })
 }

 else if(valorIdentidad== 1007203506){
   Swal.fire({
      title: 'Sin esquema de vacunación',
      icon: 'info',
      iconColor: "white", 
      text: `El usuario no cuenta con registro de vacunación ¿Desea hacer el registro?`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Aceptar',
      denyButtonText: `Cancelar`,
      background: "#1d1b45",
      color: "white",
      backdrop:"true" , 
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
       window.setTimeout(()=>{
       window.location.href="nuevopaciente.html"
      },1000);
      } else if (result.isDenied) {
        
      }
    })

 }
 else{
   Swal.fire({
      title: 'Usuario no encontrado',
      icon: 'error',
      iconColor: "white", 
      title: `El número de documento ingresado no se encuentra registrado ¿Desea agregar nuevo paciente?`,
      showDenyButton: true,
      showCancelButton: false,
      background: "#1d1b45",
      color: "white",
      backdrop:"true" , 
      confirmButtonText: 'Aceptar',
      confirmButtonTextColor: '#a40101',
      denyButtonText: `Cancelar`,
      denyButtonTextColor:"#1d1b45" , 
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
       window.setTimeout(()=>{
       window.location.href="nuevopaciente.html"
      },0);
      } else if (result.isDenied) {
        
      }
    })
 }
})