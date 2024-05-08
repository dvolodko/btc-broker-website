export class Modal {
  constructor(openBtn, closeBtn, overlay, modal) {
    this.openBtn = document.querySelector(openBtn);
    this.closeBtn = document.querySelector(closeBtn);
    this.overlay = document.querySelector(overlay);
    this.modal = document.querySelector(modal);
    this.body = document.querySelector('body');
  }

  openModal() {
    this.addClassAndListener();
  }

  closeModal() {
    this.removeClassAndListener();
  }

  onOverlayClick(e) {
    if (e.currentTarget === e.target) {
      this.closeModal();
    }
  }

  onEscPress(e) {
    if (e.code === 'Escape') {
      this.removeClassAndListener();
    }
  }

  addClassAndListener() {
    this.overlay.classList.add('active');
    this.modal.classList.add('active');
    this.body.classList.add('no-scroll');
    this.closeBtn.addEventListener('click', this.closeModal.bind(this));
    this.overlay.addEventListener('click', this.onOverlayClick.bind(this));
    document.addEventListener('keydown', this.onEscPress.bind(this));
  }

  removeClassAndListener() {
    this.overlay.classList.remove('active');
    this.modal.classList.remove('active');
    this.body.classList.remove('no-scroll');
    this.closeBtn.removeEventListener('click', this.closeModal);
    this.overlay.removeEventListener('click', this.onOverlayClick);
    document.removeEventListener('keydown', this.onEscPress);
  }
}
