let isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints; // Verifica si es un dispositivo táctil

let startX, startY;

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });

    if (isTouchDevice) {
        panel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });

        panel.addEventListener('touchmove', (e) => {
            if (!startX || !startY) {
                return;
            }

            let currentX = e.touches[0].clientX;
            let currentY = e.touches[0].clientY;
            let diffX = startX - currentX;
            let diffY = startY - currentY;

            if (Math.abs(diffX) > Math.abs(diffY)) {
                if (diffX > 0) {
                    // Deslizar hacia la izquierda, podrías hacer algo aquí si es necesario
                } else {
                    // Deslizar hacia la derecha, podrías hacer algo aquí si es necesario
                }
            } else {
                if (diffY > 0) {
                    // Deslizar hacia arriba, podrías hacer algo aquí si es necesario
                } else {
                    // Deslizar hacia abajo, podrías hacer algo aquí si es necesario
                }
            }

            startX = null;
            startY = null;
        });
    }
});
