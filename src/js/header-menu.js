const overlay = document.querySelector('.overlay');
const headerMenuItemServices = document.querySelector(
  '.header-nav-menu-item-services'
);
const headerMenuContainerServices = headerMenuItemServices.querySelector(
  '.header-menu-container-services'
);
const headerMenuItemAboutUs = document.querySelector(
  '.header-nav-menu-item-about-us'
);
const headerMenuContainerAboutUs = headerMenuItemAboutUs.querySelector(
  '.header-menu-container-about-us'
);
const headerNavMenuButtons = document.querySelectorAll('.header-nav-menu-btn');
const headerNavMenuIcons = document.querySelectorAll('.header-nav-menu-icon');

headerMenuItemServices.addEventListener('mouseenter', () => {
  headerMenuItemServices.addEventListener('mouseleave', () => {
    removeClassAndListener(headerMenuContainerServices);
  });
  addClassAndListener(headerMenuContainerServices);
});

headerMenuItemAboutUs.addEventListener('mouseenter', () => {
  headerMenuItemAboutUs.addEventListener('mouseleave', () => {
    removeClassAndListener(headerMenuContainerAboutUs);
  });
  addClassAndListener(headerMenuContainerAboutUs);
});

function addClassAndListener(activeHeaderMenuContainer) {
  overlay.classList.add('active');
  activeHeaderMenuContainer.classList.add('active');
}

function removeClassAndListener(activeHeaderMenuContainer) {
  overlay.classList.remove('active');
  activeHeaderMenuContainer.classList.remove('active');
}
