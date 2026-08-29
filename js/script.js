// MENÚ DEL CELULAR

const botonMenu = document.querySelector(".menu-movil");

const menu = document.querySelector("#menu");

const iconoMenu = document.querySelector(".menu-movil i");


botonMenu.addEventListener("click", () => {

    menu.classList.toggle("mostrar");


    if (menu.classList.contains("mostrar")) {

        iconoMenu.classList.remove("fa-bars");

        iconoMenu.classList.add("fa-xmark");

    } else {

        iconoMenu.classList.remove("fa-xmark");

        iconoMenu.classList.add("fa-bars");

    }

});



// CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN

const enlaces = document.querySelectorAll("#menu a");


enlaces.forEach((enlace) => {

    enlace.addEventListener("click", () => {

        menu.classList.remove("mostrar");

        iconoMenu.classList.remove("fa-xmark");

        iconoMenu.classList.add("fa-bars");

    });

});



// BOTÓN VER PRODUCTOS

const btnProductos = document.querySelector(".btn-productos");


btnProductos.addEventListener("click", () => {

    document.querySelector("#funciones").scrollIntoView({

        behavior: "smooth"

    });

});



// BOTÓN CONOCER MÁS

const btnConocer = document.querySelector(".btn-conocer");


btnConocer.addEventListener("click", () => {

    document.querySelector("#nosotros").scrollIntoView({

        behavior: "smooth"

    });

});



// BOTÓN REGISTRO

const btnRegistro = document.querySelector(".btn-registro");


btnRegistro.addEventListener("click", () => {

    window.location.href = "./login/index.html";

});



// BOTÓN INICIAR SESIÓN

const btnLogin = document.querySelector(".btn-login");


btnLogin.addEventListener("click", () => {

    window.location.href = "./login/index.html";

});