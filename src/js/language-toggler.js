const languageTogglerButton = document.querySelector(
	".header-language-select-btn",
);

languageTogglerButton.addEventListener("click", () => {
	console.log(window.location);
});

console.log(window.location.pathname);
