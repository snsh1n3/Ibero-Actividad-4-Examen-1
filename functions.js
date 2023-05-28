document.addEventListener("DOMContentLoaded", function () {
  var formulario = document.getElementById("myForm");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    validarFormulario();
  });

  function validarFormulario() {
    var nombre = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("message").value;

    if (nombre.trim() === "") {
      alert("Por favor, ingresa tu nombre.");
      return;
    }

    if (email.trim() === "") {
      alert("Por favor, ingresa tu correo electrónico.");
      return;
    }

    if (mensaje.trim() === "") {
      alert("Por favor, ingresa un mensaje.");
      return;
    }

    confirmarEnvio();
  }

  function confirmarEnvio() {
    // Mostrar un mensaje de confirmación
    var confirmed = confirm("¿Estás seguro de enviar el formulario?");

    if (confirmed) {
      // Si el usuario confirma, enviar el formulario
      formulario.submit();
      alert("El formulario se ha enviado correctamente.");
      formulario.reset();
    } else {
      // Si el usuario cancela, no hacer nada
      return false;
    }
  }
});
