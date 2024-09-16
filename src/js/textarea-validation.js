const invalid = { pattern: "a", value: "b" };
const textarea = Object.assign(document.createElement("textarea"), invalid);

if (textarea.checkValidity()) {
	const input = Object.assign(document.createElement("input"), invalid);

	document.body.addEventListener("input", e => {
		if (e.target.matches("textarea[pattern]")) {
			const pattern = new RegExp(`^(?:${e.target.getAttribute("pattern")})$`);

			e.target.setCustomValidity(
				pattern.test(e.target.value) ? "" : input.validationMessage,
			);
		}
	});
}
