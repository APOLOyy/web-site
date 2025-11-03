
function iniciarNavegacionSuave() {
    const enlaces = document.querySelectorAll('nav a');
    enlaces.forEach(enlace => {
    enlace.addEventListener('click', function(event) {

        event.preventDefault();

        const idSeccion = this.getAttribute('href').substring(1);

        const seccionDestino = document.getElementById(idSeccion);

         seccionDestino.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    });
});
}



function configurarLogin() {

    

    const botonLogin = document.querySelector('button[name="login"]');

    botonLogin.addEventListener('click', function() {
        const nombre = prompt("Ingrese su nombre:");
            if (nombre === null) return;

        const contraseña = prompt("Ingrese su contraseña:");
            if (contraseña === null) return;

        alert(`¡Bienvenido, ${nombre}!`);
    });
}


document.addEventListener('DOMContentLoaded',function(){
    iniciarNavegacionSuave();
    configurarLogin();
});