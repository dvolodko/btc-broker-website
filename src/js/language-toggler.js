(() => {
	const languageTogglerButton = document.querySelector(
		".header-language-select-btn",
	);

	if (window.location.pathname.includes("/en")) {
		const newPathName = window.location.pathname.replace("/en", "");
		languageTogglerButton.attributes.href.value = newPathName;
	} else {
		const newPathName = `/en${window.location.pathname}`;
		languageTogglerButton.attributes.href.value = newPathName;
	}
})();
