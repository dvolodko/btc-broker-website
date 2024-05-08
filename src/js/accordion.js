const accordion = document.querySelectorAll('.accordion');

accordion.forEach(accordionElement => {
  accordionElement.addEventListener('click', e => {
    const activePanel = e.target.closest('.accordion-panel');
    if (!activePanel) return;
    toggleAccordion(activePanel);
  });
});

function toggleAccordion(panelToActivate) {
  const activeButton = panelToActivate.querySelector('button');
  const activePanel = panelToActivate.querySelector('.accordion-content');
  const activePanelIsOpened = activeButton.getAttribute('aria-expanded');

  if (activePanelIsOpened === 'true') {
    activeButton.setAttribute('aria-expanded', false);
    activePanel.setAttribute('aria-hidden', true);
  } else {
    activeButton.setAttribute('aria-expanded', true);
    activePanel.setAttribute('aria-hidden', false);
  }
}
