// CONTENEDORES
const inicio_sesion = document.getElementById('inicio_sesion');
const portada = document.querySelector(".portada");
const registrarse = document.querySelector(".registrarse");
const iniciarSesion = document.querySelector(".iniciar-sesion");


// BOTONES DE LA PORTADA
const btnIniciar = document.querySelector(".iniciar");
const btnRegistrar = document.querySelector(".registrar");


// BOTONES DE LOS FORMULARIOS
const btnRegistro = registrarse.querySelector("button");
const btnLogin = iniciarSesion.querySelector("button");


// FORMULARIOS
const formularioRegistro = registrarse.querySelector(".formulario");
const formularioLogin = iniciarSesion.querySelector(".formulario");


// MOSTRAR REGISTRO
btnRegistrar.addEventListener("click", () => {

    portada.style.display = "none";
    iniciarSesion.style.display = "none";
    registrarse.style.display = "block";

});


// MOSTRAR INICIO DE SESIÓN
btnIniciar.addEventListener("click", () => {

    portada.style.display = "none";
    registrarse.style.display = "none";
    iniciarSesion.style.display = "block";

});


// REGISTRAR USUARIO
btnRegistro.addEventListener("click", (event) => {

    event.preventDefault();

    const usuario = registrarse
        .querySelector("#usuario")
        .value
        .trim();

    const correo = registrarse
        .querySelector('input[type="email"]')
        .value
        .trim()
        .toLowerCase();

    const celular = registrarse
        .querySelector('input[type="tel"]')
        .value
        .trim();

    const contraseña = registrarse
        .querySelector('input[type="password"]')
        .value
        .trim();


    // VALIDAR CAMPOS
    if (
        usuario === "" ||
        correo === "" ||
        celular === "" ||
        contraseña === ""
    ) {

        alert("Por favor completa todos los campos");

        return;
    }


    // GUARDAR DATOS
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("correo", correo);
    localStorage.setItem("celular", celular);
    localStorage.setItem("contraseña", contraseña);


    alert("Usuario registrado correctamente");


    // LIMPIAR FORMULARIO
    formularioRegistro.reset();


    // MOSTRAR INICIO DE SESIÓN
    registrarse.style.display = "none";
    iniciarSesion.style.display = "block";

});


// INICIAR SESIÓN
btnLogin.addEventListener("click", (event) => {

    event.preventDefault();


    // DATOS ESCRITOS EN EL LOGIN
    const correo = iniciarSesion
        .querySelector('input[type="email"]')
        .value
        .trim()
        .toLowerCase();

    const contraseña = iniciarSesion
        .querySelector('input[type="password"]')
        .value
        .trim();


    // VALIDAR CAMPOS
    if (correo === "" || contraseña === "") {

        alert("Completa todos los campos");

        return;
    }


    // OBTENER DATOS GUARDADOS
    const correoGuardado = localStorage.getItem("correo");
    const contraseñaGuardada = localStorage.getItem("contraseña");


    // COMPROBAR SI EXISTE UN USUARIO
    if (
        correoGuardado === null ||
        contraseñaGuardada === null
    ) {

        alert("Primero debes registrarte");

        return;
    }


    // COMPARAR DATOS
    if (
        correo === correoGuardado &&
        contraseña === contraseñaGuardada
    ) {

        alert("Inicio de sesión exitoso");

        formularioLogin.reset();

    } else {

        alert("Correo o contraseña incorrectos");

    }

});


// ENLACES DEL LOGIN
const enlaces = iniciarSesion.querySelectorAll("a");


// RECUPERAR CONTRASEÑA
enlaces[0].addEventListener("click", (event) => {

    event.preventDefault();

    const correoGuardado = localStorage.getItem("correo");

    if (correoGuardado === null) {

        alert("No hay ningún usuario registrado");

    } else {

        alert(
            "Puedes recuperar tu contraseña con el correo: " +
            correoGuardado
        );

    }

});


// IR A REGISTRARSE
enlaces[1].addEventListener("click", (event) => {

    event.preventDefault();

    iniciarSesion.style.display = "none";
    registrarse.style.display = "block";

});



inicio_sesion.addEventListener('submit', async function(evento) {
  evento.preventDefault(); 
  
  // 1. Tomamos lo que Pepa escribió
  const correologin = document.getElementById('correologin').value;
  const contraseñalogin = document.getElementById('contraseñalogin').value;

  // 2. Llamamos al Mesero (Backend) en el puerto 3000
  try {
    const respuesta = await fetch('http://localhost:3000/api/inicio_sesion', {
      method: 'POST', // Queremos "enviar" información
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ correo: correologin, contraseña: contraseñalogin })
    });

    if (respuesta.ok) {
      alert('¡se inicio sesion !');
      inicio_sesion.reset(); // Limpiamos el formulario
    }
  } catch (error) {
    alert('El Mesero no responde. Revisa si el servidor está encendido.');
  }
});
