const hamburgerButton = document.querySelector('.button-hamburger');

hamburgerButton.addEventListener('click', () => {
  const currentState = hamburgerButton.getAttribute('data-state');

  if (!currentState || currentState === 'closed') {
    hamburgerButton.setAttribute('data-state', 'opened');
    hamburgerButton.setAttribute('aria-expanded', 'true');
  } else {
    hamburgerButton.setAttribute('data-state', 'closed');
    hamburgerButton.setAttribute('aria-expanded', 'false');
  }
});

export default hamburgerButton;
