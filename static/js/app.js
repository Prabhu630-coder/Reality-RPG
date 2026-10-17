function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    const firstInput = modal.querySelector('input:not([type=hidden])');
    if (firstInput) setTimeout(() => firstInput.focus(), 100);
  }
}
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}
function backdropClose(event, id) {
  if (event.target.id === id) closeModal(id);
}
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.querySelectorAll('.modal-backdrop.open').forEach((modal) => closeModal(modal.id));
  }
});
document.querySelectorAll('.flash').forEach((flash) => {
  setTimeout(() => {
    if (flash.isConnected) {
      flash.style.transition = 'opacity .4s';
      flash.style.opacity = '0';
      setTimeout(() => flash.remove(), 450);
    }
  }, 6500);
});
