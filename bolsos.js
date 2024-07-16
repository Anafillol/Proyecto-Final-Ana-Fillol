document.addEventListener('DOMContentLoaded', function() {
    const contenedores = document.querySelectorAll('.imagenContainer');

    contenedores.forEach(contenedor => {
        const mainImage = contenedor.querySelector('.CanastaFlecos'); // Buscar la imagen principal por su clase
        const hoverImage = contenedor.querySelector('.Foto_CanastaFlecos'); // Buscar la imagen de hover por su clase

        // que se vea la imagen al pasar el ratón sobre el contenedor
        contenedor.addEventListener('mouseover', function() {
            if (mainImage && hoverImage) {
                mainImage.style.display = 'none';
                hoverImage.style.display = 'block';
            }
        });

        // Volver a mostrar imagen "principal" al quitar el ratón del contenedor
        contenedor.addEventListener('mouseout', function() {
            if (mainImage && hoverImage) {
                mainImage.style.display = 'block';
                hoverImage.style.display = 'none';
            }
        });
    });
});

    // Botón para que suba de forma suave hacía arriba
    const buttonArriba = document.querySelector(".boton_arriba");
    buttonArriba.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
