// console.log("Hola soy el mensaje del log"); Cuando entras a la pagina, aprestas en inspeccionar, vas a la parte de console y te sale lo que esté atras de las ""
// alert("Hola soy el texto del alert"); Cuando entras a la pagina sale una alerta mostrando el texto que está adentro de los ""

// var Se utiliza para crear una variable en donde se guarden cosas
// let Funciona igual que el "var"
// const Se utiliza para crear una variable constante, no se puede modificar lo que está adentro

// var edad = 50; Se utiliza para darle el valor 50 a la variable edad
// console.log(edad); Se utliza para mostrar la variable dentro de la pagina (solo para mi) (inspeccionar)

// != (Significa distinto)
// definir = crearla != ejecutarla

let nombre = prompt("Ingrese su nombre:");

function saludo() {
    while (nombre == "") {
        alert("No ha ingresado ningún nombre. Intentelo de nuevo por favor.");
        nombre = prompt("Ingrese su nombre:");
    }

    alert("Bienvenid@ a la página " + nombre + " espero que te guste!");

}

saludo(nombre);