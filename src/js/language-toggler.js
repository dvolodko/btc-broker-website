(() => {
	const languageTogglerButton = document.querySelectorAll(
		"[data-btn='language']",
	);

	languageTogglerButton.forEach(button => {
		if (window.location.pathname === "/") {
			const newPathName = "en";
			button.attributes.href.value = newPathName;
		} else if (window.location.pathname.includes("/en/")) {
			const newPathName = window.location.pathname.replace("/en/", "/");
			button.attributes.href.value = newPathName;
			// } else if (window.location.pathname.includes("/en")) {
			// 	const newPathName = window.location.pathname.replace("/en", "/");
			// 	button.attributes.href.value = newPathName;
		} else {
			const newPathName = `/en${window.location.pathname}`;
			button.attributes.href.value = newPathName;
		}
	});
})();
