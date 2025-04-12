let currentIndex = 0;
const slides = document.querySelectorAll('.Imagen');

function showNextImage() {
    // Imagen actual sale por la izquierda
    slides[currentIndex].classList.remove('active');
    slides[currentIndex].classList.add('leave');

    let previousIndex = currentIndex;  // Guarda el índice anterior
    currentIndex = (currentIndex + 1) % slides.length; // Avanza al siguiente

    // Espera a que la animación termine antes de activar la nueva imagen
    setTimeout(() => {
        slides[previousIndex].classList.remove('leave'); // Limpia la imagen anterior
        slides[currentIndex].classList.add('active'); // Activa la nueva imagen
    }, 1000); // Debe coincidir con la duración de la animación CSS
}

// Activar la primera imagen al cargar
slides[currentIndex].classList.add('active');

// Cambio automático cada 5 segundos
setInterval(showNextImage, 5000);

