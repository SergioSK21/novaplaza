
        // Obtener el formulario
        var form = document.getElementById("subscribe-form");

        // Añadir evento de submit al formulario
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Evitar el envío normal del formulario

            // Obtener valores de los campos
            var fullName = document.getElementById("fullName").value.trim();
            var email = document.getElementById("email").value.trim();

            // Validación de campo "Nombre Completo"
            if (fullName === "") {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Por favor, escribe tu nombre completo.',
                });
                return;
            }

            // Validación de campo "Correo Electrónico"
            if (email === "") {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Por favor, escribe tu correo electrónico.',
                });
                return;
            }

            // Validación del formato de correo electrónico
            var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailPattern.test(email)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Por favor, escribe un correo electrónico válido.',
                });
                return;
            }

            // Si todo es válido, mostrar alerta de éxito
            Swal.fire({
                icon: 'success',
                title: '¡Suscripción exitosa!',
                text: 'Gracias por suscribirte. Te mantendremos informado.',
                showConfirmButton: false,
                timer: 2000 // Cerrar automáticamente después de 2 segundos
            });

            // Limpiar los campos después de la alerta
            document.getElementById("fullName").value = "";
            document.getElementById("email").value = "";
        });