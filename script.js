


document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`¡Gracias, ${name}! Hemos recibido tu mensaje. Responderemos a tu correo (${email}) lo antes posible.`);
        document.getElementById('contact-form').reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
