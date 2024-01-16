// Nuevo ingreso
let nombreJugador = prompt("Ingrese su nombre:");

// Función para mostrar opciones al jugador //Incompletoooo
function mostrarOpciones() {
    alert("¡Bienvenido, " + jugador.nombre + "!");
}

// Función principal
function validarEdad() {
    let intentos = 3;

    while (intentos > 0) {
        // Solicitar al usuario que ingrese su edad
        let edadUsuario = prompt("Intento " + (4 - intentos) + ": Ingrese su edad:");

        // Convertir la entrada a un número
        edadUsuario = parseInt(edadUsuario);

        // Verificar si la entrada es un número válido
        if (!isNaN(edadUsuario)) {
          
            // Si la edad del jugador es entre 10 a 17 años es para...
            // la categoria Junior
            switch (true) {
                case (edadUsuario >= 10 && edadUsuario <= 17):
                    alert("¡Aca tenes las opciones Junior diponibles para vos!.");
                   
            // Obtener la selección del usuario
    let opcionSeleccionada = prompt("Seleccione una opción:\n1. Anime\n2. Disney\n3. Todas Las paletas");

    // Convertir la opción a un número
    opcionSeleccionada = parseInt(opcionSeleccionada);

    // Verificar la opción seleccionada 
    switch (opcionSeleccionada) {
        case 1:
            alert("Seleccionaste Anime");
            break;
        case 2:
            alert("Seleccionaste Disney");
            break;

            case 3:
            alert("Seleccionaste Todas Las paletas")
            break;
            return;  // Salir de la función si la edad es válida
                default:
                    alert ("Ups no tenemos nada para mostrarte" );
                    intentos--;
                    break;
    }
                    return;  // Salir de la función si la edad es válida

                    // Si la edad del jugador es entre 18 a 60 años es para...
                    // la categoria Adulto
                  
                case (edadUsuario >= 18 && edadUsuario <= 60):
                    alert("¡Aca tenes las opciones para todos los niveles!");
                    return;  // Salir de la función si la edad es válida
                default:
                    alert("Ups no tenemos nada para mostrarte :(" +(intentos - 1));
                    intentos--;
                    
                    break;
            }
        } else {
            alert("Por favor, ingresa una edad válida. Intentos restantes: " + (intentos - 1));
            intentos--;
        }
    }
    // Si se agotan los intentos
    alert("Se agotaron los intentos. Acceso denegado.");
}

// Llamada a la función principal
validarEdad();