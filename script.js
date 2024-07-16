document.addEventListener("DOMContentLoaded", function () {
    const imagenes = document.querySelectorAll('.seccionImagenes__contenedor img');
    const prevBoton = document.getElementById('prevBoton');
    const nextBoton = document.getElementById('nextBoton');
    let startIndex = 0; // Índice inicial de la primera imagen visible

    // Es la función para que se vean las 4 imágenes 
    function mostrarImagenes() {
        imagenes.forEach((img, index) => {
            if (index >= startIndex && index < startIndex + 4) {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }
        });
    }

    // Para hacer clic en el botón "Siguiente"
    nextBoton.addEventListener('click', function() {
        if (startIndex + 4 < imagenes.length) {
            startIndex++;
            mostrarImagenes();
        }
    });

    // Paara hacer clic en el botón "Anterior"
    prevBoton.addEventListener('click', function() {
        if (startIndex > 0) {
            startIndex--;
            mostrarImagenes();
        }
    });

    // Mostrar las primeras 4 imágenes al cargar la página
    mostrarImagenes();

    // Botón para que suba de forma suave hacía arriba
    const buttonArriba = document.querySelector(".boton_arriba");
    buttonArriba.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });



 //ESTA ES LA SECCIÓN  DE LA BARRA LATERAL



    // Evento al hacer clic en el botón de lista barss
    const botonLista = document.querySelector('.header__botonLista');
    const contenedorCabecera = document.querySelector('.cabecera__contenedor');
    const itemsNavegacion = document.querySelectorAll('.header__elementoLista');

    // Evento al hacer clic en el botón de lista barss
    botonLista.addEventListener('click', function() {
        // Muestraa el menú lateral (contenedor de cabecera)
        contenedorCabecera.style.right = '0'; // Se despliegaa el menu lateral

        // Muestra los elementos de navegación
        itemsNavegacion.forEach(item => {
            item.style.display = 'block';
        });
    });

    // Evento al hacer clic en el botón de cerrar
    const botonCerrar = document.querySelector('.header__botonCerrar');
    botonCerrar.addEventListener('click', function() {

        // Oculto el menú lateral (ess el contenedor de la cabecera)
        contenedorCabecera.style.right = '-100%'; // Oculto así el menú lateral

        // Oculto los elementos de navegación
        itemsNavegacion.forEach(item => {
            item.style.display = 'none';
        });
    });

    // Se redireccionaa a 'Canastas.html' al hacer clic 
    const itemCanastas = document.querySelector('.header__linkLista[href="Canastas.html"]');
    itemCanastas.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href = 'Canastas.html';
    });

    // Se redirecciona a 'bolsos.html' al hacer clic 
    const itemBolsos = document.querySelector('.header__linkLista[href="bolsos.html"]');
    itemBolsos.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href = 'bolsos.html';
    });

    // Se redirecciona a la sección "Nosotros" al hacer click 
    const itemNosotros = document.querySelector('.header__linkLista[href="nosotros.html"]');
    itemNosotros.addEventListener('click', function(event) {
        event.preventDefault(); 

    });

    // Se redireccionaa la sección "Contacto" al hacer clic 
    const itemContacto = document.querySelector('.header__linkLista[href="contacto.html"]');
    itemContacto.addEventListener('click', function(event) {
        event.preventDefault(); 
    });

});
