document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    const submitButton = document.getElementById('submit');
    const requiredInputs = form.querySelectorAll('input[required], textarea[required]');

    // Agregar un evento a cada campo para que sea obligatorio antes de enviarlo.
    requiredInputs.forEach(input => {
        input.addEventListener('input', function() {
            // Verifica si tiene mínimo un caracter para poder enviar.
            const allFieldsFilled = Array.from(requiredInputs).every(input => input.value.trim().length > 0);

            // Se "activa" el botón de enviar si todos los campos obligatorios están completados
            submitButton.disabled = !allFieldsFilled;
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
