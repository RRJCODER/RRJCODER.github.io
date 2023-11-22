const panels = document.querySelectorAll('.panel'); // Selecciona todos los elementos con la clase .panel

panels.forEach(panel => { // Itera sobre cada elemento .panel
    panel.addEventListener('click', () => { // Agrega un evento de clic a cada panel
        removeActiveClasses(); // Llama a la función removeActiveClasses para eliminar la clase 'active' de todos los paneles
        panel.classList.add('active'); // Agrega la clase 'active' solo al panel actual que se hizo clic
    });
});

function removeActiveClasses() { // Función para eliminar la clase 'active' de todos los paneles
    panels.forEach(panel => { // Itera sobre cada elemento .panel
        panel.classList.remove('active'); // Elimina la clase 'active' de cada panel
    });
}