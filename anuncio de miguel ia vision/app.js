document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener los valores de los campos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validar que todos los campos estén llenos
    if (!name || !email || !message) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Construir el enlace mailto
    const subject = `Consulta de ${encodeURIComponent(name)}`;
    const body = `Nombre: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMensaje: ${encodeURIComponent(message)}`;
    const mailToLink = `mailto:migueleselnumberone@gmail.com?subject=${subject}&body=${body}`;

    // Redirigir al enlace mailto
    window.location.href = mailToLink;

    // Confirmación
    alert('Se ha abierto tu cliente de correo para enviar el mensaje.');
});
