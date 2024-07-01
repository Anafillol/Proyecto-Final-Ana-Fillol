document.addEventListener('DOMContentLoaded', function() {
    const contenedores = document.querySelectorAll('.imagenContainer');

    contenedores.forEach(contenedor => {
        const mainImageId = contenedor.getAttribute('data-main-image');
        const hoverImageId = contenedor.getAttribute('data-hover-image');

        const mainImage = document.getElementById(mainImageId);
        const hoverImage = document.getElementById(hoverImageId);

        // Muestraa imagen de cambio al pasar el ratón sobre el contenedor
        contenedor.addEventListener('mouseover', function() {
            if (mainImage && hoverImage) {
                mainImage.style.display = 'none';
                hoverImage.style.display = 'block';
            }
        });

        // Mostrar la imagen "principal" al quitar el ratón del contenedor
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
