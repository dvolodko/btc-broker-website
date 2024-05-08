const mobileMenuOverlay = document.querySelector(".overlay");
const hamburgerBtn = document.querySelector(".button-hamburger");
const mobileMenu = document.querySelector(".mobile-menu-container");
const mobileMenuBackBtn = mobileMenu.querySelector(".mobile-menu-back-btn");
const mobileNavMenu = mobileMenu.querySelector(".mobile-nav-menu");
const slideMenu = mobileMenu.querySelector(".mobile-nav-menu-list");
const body = document.querySelector("body");
let activeSubmenu;

function classListToggler(element, className) {
	element.classList.toggle(className);
}

function toggleMobileMenu(element) {
	const currentState = element.getAttribute("data-state");

	if (!currentState || currentState === "closed") {
		openModal();
	} else {
		closeModal();
	}
}

function openModal() {
	addClassAndListener();
}

function closeModal() {
	removeClassAndListener();
}

function onOverlayClick(e) {
	if (e.currentTarget === e.target) {
		closeModal();
	}
}

function onEscPress(e) {
	if (e.code === "Escape") {
		closeModal();
	}
}

function openSlideSubmenu(e) {
	activeSubmenu = e.target.closest(".mobile-nav-menu-item");
	if (!activeSubmenu) return;
	activeSubmenu.classList.add("active");
	mobileMenuBackBtn.classList.add("active");
}

function closeSlideSubmenu() {
	if (!activeSubmenu) return;
	activeSubmenu.classList.remove("active");
	mobileMenuBackBtn.classList.remove("active");
}

hamburgerBtn.addEventListener("click", () => {
	toggleMobileMenu(hamburgerBtn);
});

function addClassAndListener() {
	mobileMenuOverlay.classList.add("active");
	mobileMenu.classList.add("active");
	body.classList.add("no-scroll");
	classListToggler(hamburgerBtn, "active");
	hamburgerBtn.setAttribute("data-state", "opened");
	hamburgerBtn.setAttribute("aria-expanded", "true");
	mobileMenuOverlay.addEventListener("click", onOverlayClick);
	document.addEventListener("keydown", onEscPress);
	slideMenu.addEventListener("click", openSlideSubmenu);
	mobileMenuBackBtn.addEventListener("click", closeSlideSubmenu);
	mobileNavMenu.style.height = mobileNavMenu.scrollHeight + "px";
}

function removeClassAndListener() {
	mobileMenuOverlay.classList.remove("active");
	mobileMenu.classList.remove("active");
	body.classList.remove("no-scroll");
	classListToggler(hamburgerBtn, "active");
	hamburgerBtn.setAttribute("data-state", "closed");
	hamburgerBtn.setAttribute("aria-expanded", "false");
	mobileMenuOverlay.removeEventListener("click", onOverlayClick);
	document.removeEventListener("keydown", onEscPress);
	closeSlideSubmenu();
	slideMenu.removeEventListener("click", openSlideSubmenu);
	mobileMenuBackBtn.removeEventListener("click", closeSlideSubmenu);
}
