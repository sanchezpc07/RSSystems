// Manejo de eventos del DOM para la Ventana Modal de Términos
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('termsModal');
  const openBtn = document.getElementById('openTermsBtn');
  const closeBtn = document.getElementById('closeTermsBtn');

  // Función para abrir/cerrar agregando o quitando la clase active
  const toggleModal = () => {
    modal.classList.toggle('active');
  };

  // Escuchadores de clics profesionales
  if (openBtn) openBtn.addEventListener('click', toggleModal);
  if (closeBtn) closeBtn.addEventListener('click', toggleModal);

  // Cerrar el modal automáticamente si el usuario hace clic fuera de la caja
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      toggleModal();
    }
  });
});
