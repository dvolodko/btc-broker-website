const collapsibleMenu = document.querySelectorAll('.footer-menu');

collapsibleMenu.forEach(collapsibleSubMenu => {
  collapsibleSubMenu.addEventListener('click', e => {
    const activeMenu = e.target.closest('.footer-menu-item');
    if (!activeMenu) return;
    toggleCollapsibleMenu(activeMenu);
  });
});

function toggleCollapsibleMenu(menuToActivate) {
  const activeMenu = menuToActivate.querySelector(
    '.footer-menu-submenu-wrapper'
  );

  menuToActivate.classList.toggle('active');

  if (activeMenu.style.maxHeight) {
    activeMenu.style.maxHeight = null;
  } else {
    activeMenu.style.maxHeight = activeMenu.scrollHeight + 'px';
  }
}
